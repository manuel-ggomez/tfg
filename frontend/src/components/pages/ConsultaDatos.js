import React from 'react';
import Sidebar from '../Sidebar';

export default function ConsultaDatos() {
  return(
    <>
    <Sidebar />
    <iframe src="http://localhost:5601/app/kibana#/management/kibana/index_pattern?_g=()" height="620" width="1525"></iframe>
    </>
  ); 
}