## Ciclo de vida del projecto

<h3>Rama de trabajo</h3>
Para que trabajemos de manera organizada, cada uno tendra que trabajar en su propia rama, de esta manera, cuando incorporemos cambios, no tengamos conflictos en el código. Para lograr ello, desde la rama master que se tiene que estar ubicada se realiza lo siguiente

```bash
git checkout master
```
```bash
git pull origin master
```
```bash
git branch -M nombreDeSuRama
```

De esta manera, los cambios que hagan solamente se reflejara en su rama y no en cualquier otra, con ello, ya pueden iniciar su tarea.

<h3>Incorporar cambios</h3>

Cuando hayan terminado su tarea o algún cambio rapido, este sera la cronología para la inserción de su codigo al repositorio (En la terminal de su visual o gitbash, donde hacen npm run dev):

```bash
git checkout suRama
git add .
git commit -m "06/10/2024 Add/Delete/Fix/Change: Breve mensaje de lo que hicieron"
git checkout master
git pull origin master
git merge suRama
```
De esta manera, fusionaran su rama con la rama master, que es la rama en la que todos enviamos nuestros cambios. Puede que les aparescan conflictos, así que, los tienen que resolver, ya sea aceptando los cambios de algún compañero, aceptando sus cambios o aceptando ambos. Para realizar esto, se dirigen aquí

![13e150e5-95ee-47f7-b865-31e4ef657c68](https://github.com/user-attachments/assets/1ed81562-7b0a-4323-81ea-a309b54cb06d)

Resuelven los conflictos hasta que cada archivo esten guardados los cambios, limpios y sin conflictos. De esta manera, cuando hagan eso, pasen su mouse en el archivo y verifiquen que tenga una X y no un simbolo de palomear. Si lo tiene, denle click y ya cambiara.

Finalmente, cuando eso pase, le daran click en el bóton que dice SYNC

![cd2659fb-75c2-49ce-8d38-66a5513cc0f7](https://github.com/user-attachments/assets/ae3cd87a-e383-4428-ab3b-83ef078b880a)
