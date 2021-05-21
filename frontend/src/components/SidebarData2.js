import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData2 = [

    {
        title: 'Inicio',
        path: '/',
        icon: <AiIcons.AiFillHome />
    },

  {
    title: 'Gestión',
    path: '/gestion',
    icon: <i class="fas fa-tasks"></i>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Gestión de Sensores y Subsistemas',
        path: '/gestion/sensores',
        icon: <i class="fas fa-terminal"></i>
      },
      {
        title: 'Configuración',
        path: '/gestion/configuracion',
        icon: <i class="fas fa-tools"></i>
      }
    ]
  },
  {
    title: 'Visualización',
    path: '/visualizacion',
    icon: <i class="fas fa-eye"></i>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Riesgo Dinámico',
        path: '/visualizacion/riesgo-dinamico',
        icon: <i class="fas fa-chart-pie"></i>,
        cName: 'sub-nav'
      },
      {
        title: 'Consulta Datos',
        path: '/visualizacion/consulta-datos',
        icon: <i class="fas fa-poll"></i>,
        cName: 'sub-nav'
      }
    ]
  }
];
