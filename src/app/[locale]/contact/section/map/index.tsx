'use client';

import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import styles from './styles.module.scss';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

export const MapSection = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [20, 55],
        zoom: 3.5,
      });

      const markers = [
        { lng: 27.59249, lat: 53.93432, name: 'Minsk, Belarus' },
        { lng: 37.61937, lat: 55.76935, name: 'Moscow, Russia' },
        { lng: 26.69731, lat: 58.36666, name: 'Tartu, Estonia' },
      ];

      markers.forEach((marker) => {
        new mapboxgl.Marker()
          .setLngLat([marker.lng, marker.lat])
          .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(marker.name))
          .addTo(map.current!);
      });
    }
  }, []);

  return <div className={styles.wrapper} ref={mapContainer} />;
};
