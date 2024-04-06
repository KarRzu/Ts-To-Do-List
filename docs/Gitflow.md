## **:evergreen_tree: Gitflow**

### **1. Nazwy Branchy**

Nazwy branchy mają być budowane wg schematu: branchType/nrTaskaProjektGithub/opis, czyli np:

`feature/1/repair-relative-imports`

Typy branchy: **feature**, **hotfix**, **release**

### **2. Nazwy commitów**

Powinny sugerować nam typ zdarzenia:

:bomb: feat: nowa funkcjnonalność

:bomb: fix: naprawa bugów

:bomb: refactor: refaktor kodu

:bomb: style: zmiany w stylach, formatowaniu kodu

:bomb: chore: zmiany w procesie budowania aplikacji lub zew. bibliotek

:bomb: docs: zmiany jedynie w dokumentacji

:bomb: test: dodanie testów

:bomb: perf: zmiany wpływające na poprawę wydajności aplikacji

:bomb: revert: cofnięcie zmian

oraz deskryptywnie opisywać nasze działania.

Przykład:

`"feat: add navigation bar component"`

### **3. Długość commitów**

Staramy robić się częste commity w których nie będzie zbyt dużo treści. Ułatwi to nam pracę z CR.

### **4. Merge**

:bomb: **Nazwy Merge Request'ów** :

wzór: typ: [nrTaskaProjektGithub] opis

przykład: `feature: [1] user authentication`

Wymagana **1** approvka członka zespołu przed wykonaniem merge'a.

Squashujemy pliki podczas merge'a

## **:pencil: Code review**

:white_check_mark: Wykazujemy się proaktywnością podczas Code Review

:white_check_mark: Kultura podczas code review

:white_check_mark: Wspólnie dbamy o jakość kodu który ma być zmergowany

