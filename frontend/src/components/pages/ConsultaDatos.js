import React from 'react';
import Sidebar from '../Sidebar';

export default function ConsultaDatos() {
  return(
    <>
    <Sidebar />
    <iframe src="http://localhost:5601/app/kibana#/discover?_g=()&_a=(columns:!(_source),index:e27ad4a0-ae41-11eb-88ec-774da86927d8,interval:auto,query:(language:kuery,query:''),sort:!(!('@timestamp',desc)))" height="618" width="1525"></iframe>
    </>
  ); 
}