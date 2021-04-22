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
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Gestión de sensores',
        path: '/gestion/sensores',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Configuración',
        path: '/gestion/configuracion',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Visualización',
    path: '/visualizacion',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Riesgo Dinámico',
        path: '/visualizacion/riesgo-dinamico',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Consulta Datos',
        path: '/visualizacion/consulta-datos',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      }
    ]
  }
];
