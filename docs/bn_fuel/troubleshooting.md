# Troubleshooting

## Server console messages

| Message | What to do |
|---|---|
| `ox_fuel is running: remove it from the server` | Move the `ox_fuel` folder out of `resources/` and restart |
| `item WEAPON_PETROLCAN is missing` or `item money is missing` | Add the item to `ox_inventory`. See [Items](installation.md#items) |
| `Shared.Bank "..." does not exist in bridge/banks` | The value of `Shared.Bank` must match a bank in `bridge/banks/`. Until it does, bank and company payments are refused; cash still works |
| `bank "...", ...:` followed by an error | Your bank file failed, so the payment was refused. Check the exports it calls and that the bank is started |

## The panel

| Problem | What to do |
|---|---|
| "You are not opted in for admin duty" | Use `/optin`, or set `Shared.RequireOptin = false`. See [Who can open it](admin-panel.md#who-can-open-it) |
| "You don't have access" | Your group needs the permission set in **Admin group** |
| "Could not write the JSON file" | Give the server write permission on the `config/` folder |

## At the pump

| Message | Cause |
|---|---|
| "Park the vehicle next to the pump and get out to fuel it." | No vehicle is close enough, or the player is inside it. The petrol can still works |
| "The tank is full." | The vehicle does not need fuel |
| "Your company can only pay for its own vehicles, on duty." | The vehicle is not in the job's fleet, or the player is off duty |
| "You cannot carry a petrol can." | The inventory is full, or `WEAPON_PETROLCAN` is missing from `ox_inventory` |

## In game

| Problem | What to do |
|---|---|
| No "Use pump" option | The player must be on foot, inside an active station's radius. Check the station's radius in the panel. For custom pump objects, add them to `Shared.PumpModels` |
| The "Pour petrol can" option does not appear | Hold the can in your hands, next to the fuel cap. If it is hard to trigger on some vehicles, raise `Shared.CapDistance` |
| Text UI shows even though the mode is ox_target | `ox_target` is not running. The F8 console shows a warning |
| A new language does not appear | Restart the resource so players download the file, then set the code in the panel |
| Players still see the old colours | They see the new colours the next time they open a pump |
