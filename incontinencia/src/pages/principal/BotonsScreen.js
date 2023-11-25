import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import axios from 'axios';
import { styles } from './BotonsScreenStyle';
import ModalUrine from '../../components/modal/urine/ModalUrine';
import ModalEscape from '../../components/modal/escape/ModalEscape';
import ModalData from '../../components/modal/data/ModalData';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BotonsScreen({ route }) {
  const { email } = route.params;
  const [showDataButton, setShowDataButton] = useState(true);
  const [firstUsageDate, setFirstUsageDate] = useState(null);
  const [waterCount, setWaterCount] = useState(0);
  const [bathroomCount, setBathroomCount] = useState(0);
  const [leakageCount, setLeakageCount] = useState(0);
  const [isVisibleUrine, setIsVisibleUrine] = useState(false);
  const [isVisibleEscape, setIsVisibleEscape] = useState(false);
  const [isVisibleData, setIsVisibleData] = useState(false);
  const [infoTypeLog, setInfoTypeLog] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/get-last-data/${email}`);
        const lastData = response.data.data;

        if (lastData) {
          setWaterCount((prevWaterCount) => lastData.water_count);
          setBathroomCount((prevBathroomCount) => lastData.bathroom_count);
          setLeakageCount((prevLeakageCount) => lastData.leakage_count);
        }
      } catch (error) {
        console.error('Erro ao carregar dados da base de dados:', error);
      }
    };

    fetchData();
    loadFirstUsageDate();
  }, [email]);

  const loadFirstUsageDate = async () => {
    try {
      const storedDate = await AsyncStorage.getItem('firstUsageDate');

      if (storedDate) {
        setFirstUsageDate(new Date(storedDate));
      } else {
        // Se a data não estiver armazenada, defina a data atual como a primeira utilização
        const currentDate = new Date();
        setFirstUsageDate(currentDate);
        await AsyncStorage.setItem('firstUsageDate', currentDate.toISOString());
      }
    } catch (error) {
      console.error('Erro ao carregar a data da primeira utilização:', error);
    }
  };

  const calculateDaysDifference = () => {
    if (firstUsageDate) {
      const currentDate = new Date();
      const differenceInDays = Math.floor((currentDate - firstUsageDate) / (1000 * 60 * 60 * 24));
      return differenceInDays;
    }

    return 0;
  };

  const handleDataButtonClick = () => {
      openModalData();
  };

  useEffect(() => {
    const daysDifference = calculateDaysDifference();
    setShowDataButton(daysDifference >= 7);
  }, [firstUsageDate]);

  const averageCupSize = 250 * waterCount; // mL
  const averageUrination = 300 * bathroomCount; // mL
  const averageLeak = 100 * leakageCount; // ml

  const openModalUrine = () => {
    setIsVisibleUrine(true);
    setInfoTypeLog('banheiro');
    setBathroomCount((prevBathroomCount) => prevBathroomCount + 1)
  };

  const closeModalUrine = () => {
    setIsVisibleUrine(false);
  };

  const openModalEscape = () => {
    setIsVisibleEscape(true);
    setInfoTypeLog('vazamento');
    setBathroomCount((prevEscapeCount) => prevEscapeCount + 1)
  };

  const closeModalEscape = () => {
    setIsVisibleEscape(false);
  };

  const openModalData = () => {
    setIsVisibleData(true);
  };

  const closeModalData = () => {
    setIsVisibleData(false);
  };

  const sendUserData = async (infoValue) => {
    try {
      await axios.post('http://localhost:3001/update-data', {
        email: email,
        water_count: waterCount,
        bathroom_count: bathroomCount,
        leakage_count: leakageCount,
      });
      await axios.post('http://localhost:3001/info-log', {
        email: email,
        info_type: infoTypeLog,
        info_value: infoValue,
      })
    } catch (error) {
      console.error('Erro ao enviar dados para o backend:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.infoText}>Total de copos de água{'\n'}{waterCount}</Text>
        <TouchableOpacity
          style={[styles.button, styles.firstButton]}
          onPress={() => {
            setWaterCount((prevWaterCount) => prevWaterCount + 1);
            setInfoTypeLog(undefined)
            sendUserData();
          }}
        >
          <Text style={[styles.buttonText, styles.firstButton]}>Copos de Água</Text>
        </TouchableOpacity>
        <Text style={styles.infoText}>Quantidade média{'\n'}{averageCupSize} mL</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.infoText}>Total de idas ao banheiro{'\n'}{bathroomCount}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            openModalUrine();
          }}
        >
          <Text style={[styles.buttonText, styles.secondButton]}>Idas ao Banheiro</Text>
        </TouchableOpacity>
        <Text style={styles.infoText}>Quantidade média{'\n'}{averageUrination} mL</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.infoText}>Total de vazamentos{'\n'}{leakageCount}</Text>
        <TouchableOpacity
          style={[styles.button, styles.thirdButton]}
          onPress={() => {
            setLeakageCount((prevLeakageCount) => prevLeakageCount + 1);
            openModalEscape();
          }}
        >
          <Text style={[styles.buttonText, styles.thirdButton]}>Vazamento de Xixi</Text>
        </TouchableOpacity>
        <Text style={styles.infoText}>Quantidade média{'\n'}{averageLeak} mL</Text>
      </View>

      {true && (
                <TouchableOpacity onPress={handleDataButtonClick}>
                    <Text style={styles.buttonTest}>Acompanhe seu progresso!</Text>
                </TouchableOpacity>
            )}

      <ModalData isVisible={isVisibleData} onClose={closeModalData} userEmail={email} />

      <ModalUrine isVisible={isVisibleUrine} onClose={closeModalUrine} onColorSelect={sendUserData} />

      <ModalEscape isVisible={isVisibleEscape} onCloseUrine={closeModalEscape} onReasonSelect={sendUserData} />
    </View>
  );
}
