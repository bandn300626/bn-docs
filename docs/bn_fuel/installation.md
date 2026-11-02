# Installation

1. **Remove `ox_fuel` from the server.** Move its folder out of `resources/`. If both run you have two fuel systems, and the console warns you at startup.
2. **Add the resource.** Put `bn_fuel` in your resources and add this line to your `server.cfg`, after your bank resource:

   ```
   ensure bn_fuel
   ```

3. **Check the items.** bn_fuel needs `WEAPON_PETROLCAN` and `money` in `ox_inventory`. A standard Qbox server already has them. See [Items](#items) if yours does not.
4. **Restart the server.** No database tables are needed.

The server must run on a key that has access to the asset, because the resource is protected with FiveM Asset Escrow.

## Items

If an item is missing, the server console says so at startup:

```
[bn_fuel] item WEAPON_PETROLCAN is missing: add it to ox_inventory/data/weapons.lua (see the README)
```

ox_inventory only reads items from its own files, so add them there and restart. The resource includes the snippets in `docs/install/ox_inventory`:

| File | What to do |
|---|---|
| `data/weapons.lua` | Paste its content inside the `Weapons` table of the same file in `ox_inventory` |
| `data/items.lua` | Paste its content inside the table of the same file in `ox_inventory` |

The item images are not included. `ox_inventory` ships `WEAPON_PETROLCAN.png` and `money.png` in `web/images`. If yours are missing, get them from the [ox_inventory repository](https://github.com/overextended/ox_inventory/tree/main/web/images).

## Check that it works

1. The server console shows no `[bn_fuel]` errors.
2. `/admin:fuel` opens the panel. By default you must be an admin and opted in with `/optin`.
3. Park next to a pump, get out, and use the pump.

## Files you can edit

These files stay open in the protected version:

| File | What it holds |
|---|---|
| `shared/config.lua` | Command, opt-in, bank, distances, interact key, consumption rate and pump models |
| `bridge/framework.lua` | Framework and inventory calls |
| `bridge/banks/*.lua` | One file per bank |
| `config/*.json` | Settings, stations and fleets. The panel writes these for you |
| `locales/*.json` | Languages |
