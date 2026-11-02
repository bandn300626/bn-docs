# Other scripts

bn_fuel uses the same state bag as ox_fuel, `Entity(vehicle).state.fuel` (0-100), so scripts that only read it keep working.

## Reading the fuel level

```lua
local level = Entity(vehicle).state.fuel
```

## Setting the fuel level

From the server, use the export, with the vehicle entity and a level from 0 to 100:

```lua
exports.bn_fuel:setFuel(vehicle, 50)
```

It returns `true` if the vehicle exists. Do not change only the state bag, because the driver's game level overwrites it.

## ox_fuel exports

The resource provides `ox_fuel`, so scripts that depend on it still start. However, calls to `exports.ox_fuel` (`setPaymentMethod`, `setMoneyCheck`) fail. Payments are set up with the files in [Using another bank](banks.md).
