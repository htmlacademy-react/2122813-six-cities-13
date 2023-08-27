import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import { Offer } from '../../types/offer';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT, MapClasses } from '../../const';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../hooks';
import { getCurrentOfferId } from '../../store/page-events/selectors';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 40],
  iconAnchor: [20, 40]
});

type MapProps = {
  isMainScreen: boolean;
  offers: Offer[];
}


export default function Map(props: MapProps): JSX.Element {
  const {isMainScreen, offers} = props;
  const activeOfferId = useAppSelector(getCurrentOfferId);
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0]);

  useEffect(() => {
    if (map && isMainScreen) {
      map.eachLayer((layer) => {
        if (layer.options.pane === 'markerPane') {
          map.removeLayer(layer);
        }
      });

      offers.forEach((offer: Offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker.setIcon(
          activeOfferId !== undefined && offer.id === activeOfferId ||
          (!isMainScreen && offer.id === activeOfferId)
            ? currentCustomIcon
            : defaultCustomIcon
        )
          .addTo(map);
      });
    }
  }, [map, offers, activeOfferId, isMainScreen]);

  useEffect(() => {
    if (map && !isMainScreen) {
      map.eachLayer((layer) => {
        if (layer.options.pane === 'markerPane') {
          map.removeLayer(layer);
        }
      });
      offers.forEach((offer: Offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker.setIcon(
          activeOfferId !== undefined && offer.id === activeOfferId ||
          (!isMainScreen && offer.id === activeOfferId)
            ? currentCustomIcon
            : defaultCustomIcon
        )
          .addTo(map);
      });
    }

  }, [map, offers, isMainScreen]);

  useEffect(() => {
    if (map) {
      map.flyTo([offers[0].city.location.latitude, offers[0].city.location.longitude], offers[0].city.location.zoom);
    }
  }, [map, offers]);

  return (
    <section
      className={isMainScreen ? MapClasses.SectionMainMapClass : MapClasses.SectionPropertyMapClass}
      ref={mapRef}
      style={ {
        height: '100%',
        minHeight: '500px',
        width: '100%',
        maxWidth: '1144px',
        margin: '0 auto',
      } }
    >
    </section>
  );
}
