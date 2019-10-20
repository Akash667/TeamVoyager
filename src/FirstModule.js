import React,{useState,useLayoutEffect,useEffect} from "react";
import WorldWind from "@nasaworldwind/worldwind";
import { height } from "@material-ui/system";

const FirstModule = ({}) =>
{


    useEffect(()=>
    {
     var wwd = new WorldWind.WorldWindow("canvasOne");
    wwd.addLayer(new WorldWind.BMNGOneImageLayer());
    wwd.addLayer(new WorldWind.BMNGLandsatLayer());
    wwd.addLayer(new WorldWind.CompassLayer());
   
    var starFieldLayer = new WorldWind.StarFieldLayer();
    var atmosphereLayer = new WorldWind.AtmosphereLayer();
    wwd.addLayer(starFieldLayer);
    wwd.addLayer(atmosphereLayer);
    }
    ,[]);

    return(
        <div>
            <canvas style={
                {
                    width: '100vw',
                    height: '100vh',
                }
            } id='canvasOne' >

            </canvas>
        </div>
    
    )

}

export default FirstModule;