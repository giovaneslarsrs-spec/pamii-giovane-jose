 import React, { useState) from 'react';
 import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView} from 'react-native';

 interface BotaoProps {
 titulo: string;
 corFundo?: string;
 corTexto?: string;
 }

 export default function Index() {
   const [expressao, setExpressao] useState<string>('');
   const [resultado, setResultado] useState<string>('0');

   const operadores=[',', 'x','','];

   const linhasDeBotoes = [
    ['C','(',')', '+']
    ['7','8','9', 'x']
    ['4','5','6', '-']
    ['1','2','3', '+']
    ['0','.','⌫', '=']
   ];

   const obterCorFundo (botao: string): string => {
     if (botao 'C') return #ff3b30";
     if (botao ====") return #34c759";
     if ([x].includes (botao)) return #ff9500";
     if (['(', ')','].includes (botao)) return #555555;
     return #333333"; 
   };

   const lidarComToque = (valor: string): void => {
     if (valor === 'C') {
       setExpressao('');
       setResultado('0');
     } else if (valor === '⌫') {
       const novaExpressao = expressao.slice(0, -1);
       setExpressao(novaExpressao);
       setResultado(novaExpressao.length > 0 ? novaExpressao : '0');
     } else if (valor === '=') {
       try {
         const expressaoFormatada = expressao.replace(/x/g, '*').replace(/÷/g, '/');
         const resultadoCalculado = eval(expressaoFormatada);

         setResultado(String(resultadoCalculado));
         setExpressao(String(resultadoCalculado));
     }    catch (e) {
         setResultado('Erro');
     }
     } else {
       if (operadores.includes(valor)) {
         if (expressao === '' && valor !== '-') return;

      const ultimoCaractere = expressao.slice(-1);

      if (operadores.includes(ultimoCaractere)) {
        const novaExpressao = expressao.slice(0, -1) + valor;
        setExpressao(novaExpressao);
        setResultado(novaExpressao);
        return;
      }
    }

    setExpressao(expressao + valor);
    setResultado(expressao + valor);
  }
};