## **:file_folder: Struktura plików**

### **1. Podstawowa struktura**

```
src/
├── assets/
├── features/
└── shared/
```

### **2. assets**

:open_file_folder: **images/** &mdash; wrzucamy pliki statyczne z obrazami

:open_file_folder: **icons/** &mdash; wrzucamy pliki z ikonami svg

### **3 features**

Tu znajdują się komponenty które reprezentują jakąś część logiczną aplikacji np: Task

Jeżeli Task zawiera mniejsze komponenty to tworzymy nowe foldery dla tych komponentów wewnątrz folderu task.

Np:

`
features
|___task
    |___task-image
    |___task-description
`

### **4. shared**

Katalog zawierający reużywalne funkcje i komponenty, nie powiazane domenowo, uniwersalne typy
