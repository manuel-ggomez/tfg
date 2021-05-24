import React from 'react';
import Sidebar from '../Sidebar';

export default function RiesgoDinamico() {
  return(
    <>
    <Sidebar />
    <iframe src="http://localhost:5601/app/kibana#/dashboard/cc213630-bbb7-11eb-b7b4-dbf980a1e1f3?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:'2020-08-31T22:00:00.000Z',to:'2020-10-31T23:00:00.000Z'))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(),gridData:(h:15,i:'137ecbd7-df4a-4bab-ad4e-cfcfef3a856e',w:24,x:0,y:0),id:'50897600-bbb6-11eb-b7b4-dbf980a1e1f3',panelIndex:'137ecbd7-df4a-4bab-ad4e-cfcfef3a856e',type:visualization,version:'7.4.0'),(embeddableConfig:(),gridData:(h:15,i:'0bf20551-9f67-4d66-b452-315864a232ba',w:24,x:24,y:0),id:ce563410-bbb6-11eb-b7b4-dbf980a1e1f3,panelIndex:'0bf20551-9f67-4d66-b452-315864a232ba',type:visualization,version:'7.4.0'),(embeddableConfig:(defaultColors:('0+-+15':'rgb(0,104,55)','15+-+75':'rgb(255,255,190)','75+-+100':'rgb(165,0,38)'),legendOpen:!f,vis:(defaultColors:('0+-+15':'rgb(0,104,55)','15+-+75':'rgb(255,255,190)','75+-+100':'rgb(165,0,38)'),legendOpen:!t)),gridData:(h:15,i:'12059a6f-0432-4db4-9bdf-6706293326d6',w:24,x:0,y:15),id:f30dbdc0-bbb9-11eb-b7b4-dbf980a1e1f3,panelIndex:'12059a6f-0432-4db4-9bdf-6706293326d6',type:visualization,version:'7.4.0'),(embeddableConfig:(),gridData:(h:15,i:'075d2901-29d2-43fc-a2a7-264da184f5fb',w:24,x:24,y:15),id:'8704ec10-bbba-11eb-b7b4-dbf980a1e1f3',panelIndex:'075d2901-29d2-43fc-a2a7-264da184f5fb',type:visualization,version:'7.4.0')),query:(language:kuery,query:''),timeRestore:!f,title:'Dashboard+suricata',viewMode:view)" height="618" width="1525"></iframe>
    </>
  ); 
}