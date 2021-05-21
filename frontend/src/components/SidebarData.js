import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [

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
  },
  {
    title: 'Administración',
    path: '/administracion',
    icon: <i class="fas fa-database"></i>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Gestión de usuarios',
        path: '/administracion/gestion-usuarios',
        icon: <i class="fas fa-users"></i>,
        cName: 'sub-nav'
      }
    ]
  }
];
