## :star: **Konwencje**

### **1. Nazewnictwo**

:joystick: **Interfejsy i typy** : nie dodajemy w nazwach prefixu "I" (IProdcut, IProductCardProps) - jest to zablokowane z poziomu EsLint.

:joystick: **Foldery** : foldery nazywamy w notacji kebab-case, np `nazwa-foleru`

Dodatkowo folder z testami (jeżeli się pojawią) w danym Feature powinien nazywać się `__tests__`

## **:truck: Importy i eksporty**

### 1. **Nie używamy domyślnych importów**

zamiast tego robimy:

`export function Product() {​​​​​​
 return console.log()
}​​​​​​`

