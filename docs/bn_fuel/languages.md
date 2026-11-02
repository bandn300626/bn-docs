# Languages

English (`en`) and Spanish (`es`) are included. To pick one, write its code in `/admin:fuel` > Settings > Language code and press **Apply**.

## Adding a language

1. Copy `locales/en.json` to `locales/<code>.json` (for example `locales/fr.json`) and translate the values.
2. Restart the resource so the players download the new file.
3. Write the code in `/admin:fuel` > Settings > Language code.

Missing keys and unknown codes fall back to English.

## Station and fleet names

A station with an empty name shows `station_default` from the language file.

To translate one station or fleet name, add `station_<id>` or `fleet_<id>` to the language file:

```json
{
  "station_station_5": "Gasolinera del puerto",
  "fleet_police": "Policía"
}
```
