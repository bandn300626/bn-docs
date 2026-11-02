# Using another bank

Each bank is one file in `bridge/banks/`, and `Shared.Bank` in `shared/config.lua` picks which one is used. `renewed` (Renewed-Banking) is included and is the default.

## Adding your bank

1. Copy `docs/install/banks/template.lua` to `bridge/banks/<name>.lua`.
2. Rename `Bridge.Banks.my_bank` to `Bridge.Banks.<name>` and fill in the functions below, using the exports from your bank's documentation.
3. Set `Shared.Bank = '<name>'`, make sure your bank starts before `bn_fuel`, and restart the server.

```lua
local RESOURCE = 'my_bank'

local function running() return GetResourceState(RESOURCE) == 'started' end

Bridge.Banks.my_bank = {
    -- Player: leave these two if your bank uses the qbx_core bank account.
    balance = Bridge.qbxBank,
    charge = Bridge.qbxRemoveBank,

    companyBalance = function(job)
        if not running() then return 0 end
        return exports[RESOURCE]:getBalance(job)
    end,

    chargeCompany = function(job, amount, src, reason)
        if not running() then return false end
        return exports[RESOURCE]:removeMoney(job, amount, reason)
    end,
}
```

`my_bank`, `getBalance` and `removeMoney` are placeholders. Replace them with what your bank really provides.

## What each function must return

| Function | Must return |
|---|---|
| `balance(src)` | The player's bank balance |
| `charge(src, amount, reason)` | `true` only if the money was taken |
| `companyBalance(job)` | The company balance, or `0` if it has no account |
| `chargeCompany(job, amount, src, reason)` | `true` only if the money was taken |

## How payments work

The balance is checked before fuelling, and the charge happens when the bar ends. Fuel is only given if the charge returned `true`. If one of these functions fails, the error goes to the server console and the payment is refused.

If your bank has a transaction history, record the payment inside `chargeCompany`: `reason` describes it and `Bridge.playerName(src)` is who paid. `bridge/banks/renewed.lua` is a working example.

## No company accounts

If your server has no company accounts, leave `chargeCompany` returning `false` and `companyBalance` returning `0`, or disable the fleets in the panel.
