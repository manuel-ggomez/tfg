import React from 'react';
import Sidebar from '../Sidebar';

export default function RiesgoDinamico() {
  return(
    <>
    <Sidebar />
    <iframe src="http://localhost:5601/app/kibana#/visualize/edit/7da48d30-ae43-11eb-88ec-774da86927d8?embed=true&_g=()&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(),vis:(aggs:!((enabled:!t,id:'1',params:(),schema:metric,type:count),(enabled:!t,id:'2',params:(field:dest_ip,ipRangeType:fromTo,ranges:(fromTo:!((from:'0.0.0.0',to:'127.255.255.255'),(from:'128.0.0.0',to:'191.255.255.255')),mask:!((mask:'0.0.0.0%2F1'),(mask:'128.0.0.0%2F2')))),schema:segment,type:ip_range)),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(filter:!t,show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(),type:category)),dimensions:(x:!n,y:!((accessor:0,aggType:count,format:(id:number),params:()))),grid:(categoryLines:!f),labels:(show:!f),legendPosition:right,seriesParams:!((data:(id:'1',label:Count),drawLinesBetweenPoints:!t,mode:stacked,show:true,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),thresholdLine:(color:%2334130C,show:!f,style:full,value:10,width:1),times:!(),type:histogram,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:Count),type:value))),title:prueba1,type:histogram))" height="618" width="1525"></iframe>
    </>
  ); 
}