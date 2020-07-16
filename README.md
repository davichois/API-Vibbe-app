# API COVID19

### Esta es una API de todos los departamentos del Perù con las estadisticas de Confirmados, Recuperados y Muertes.

## DEPARTAMENTOS : 

| POINT            | HTTP   | COMENTARIO                                              |
| ---------------- | ------ | ------------------------------------------------------- |
| /api/            | GET    | Este devuelve la api completa con las Url que contiene. |
| /api/covid19/    | GET    | Este devuelve todos los departamentos.                  |
| /api/covid19/:ID | GET    | Este devuelve un departamento en especifico.            |
| /api/covid19/    | POST   | Este crea un departamento.                              |
| /api/covid19/:ID | PUT    | Este actualiza un departamento en especifico.           |
| /api/covid19/:ID | DELETE | Elimina un departamento en especifico.                  |

> #### GET/ :
>>#### Este devuelve la api completa con las Url que contiene.
>>##### URL : http://localhost:4000/api 
>>##### URLRed : https://vibbeapi.herokuapp.com/api" 

> #### GET/ :
>>#### Este metodo te trae todos los departamentos, si usas una query te devovera el departamento.
>>##### URL : http://localhost:4000/api/covid19 
>>##### URL Query : http://localhost:4000/api/covid19/?departamento=NombreDeDepartamento  
>>##### URLRed : https://vibbeapi.herokuapp.com/api/covid19" 
---
> #### GET/:ID :
>>#### Este metodo recibe el metodo id del departamento creado para que te devuelva uno en especifico.
>>##### URL : http://localhost:4000/api/covid19/ID  
>>##### URLRed : https://vibbeapi.herokuapp.com/api/covid19/ID" 
---
> #### POST/ :
>>#### Este metodo crea un nuevo Departamento, recibe los parametros:
>>> bandera, departamento, confirmados, recuperados, muertes
>>##### URL : http://localhost:4000/api/covid19  
>>##### URLRed : https://vibbeapi.herokuapp.com/api/covid19" 
---
> #### PUT/:ID :
>>#### Este metodo edita un Departamento, recibe los parametros, dependiendo cual quieres editar, es importante pasar el ID del departamento:
>>> bandera, departamento, confirmados, recuperados, muertes
>>##### URL : http://localhost:4000/api/covid19/ID  
>>##### URLRed : https://vibbeapi.herokuapp.com/api/covid19/ID" 
---
> #### DELETE/:ID :
>>#### Este metodo recibe el metodo id del departamento creado y elimina el departamento.
>>##### URL : http://localhost:4000/api/covid19/ID  
>>##### URLRed : https://vibbeapi.herokuapp.com/api/covid19/ID" 

## COMENTARIOS : 

| POINT                | HTTP   | COMENTARIO                                              |
| -------------------- | ------ | ------------------------------------------------------- |
| /api/                | GET    | Este devuelve la api completa con las Url que contiene. |
| /api/comentarios/    | GET    | Este devuelve todos los comentarios con likes.          |
| /api/comentarios/    | POST   | Este crea un cometarios y likes.                        |
| /api/comentarios/:ID | DELETE | Elimina un cometarios en especifico.                    |


> #### GET/ :
>>#### Este metodo te trae todos los comentarios.
>>##### URL : http://localhost:4000/comentarios 
>>##### URLRed : https://vibbeapi.herokuapp.com/api/comentarios/" 
---

> #### POST/ :
>>#### Este metodo crea un nuevo comentario, recibe los parametros:
>>>  likes, comments
>>##### URL : http://localhost:4000/api/comentarios  
>>##### URLRed : https://vibbeapi.herokuapp.com/api/comentarios/" 

---
> #### DELETE/:ID :
>>#### Este metodo recibe el metodo id del comentario creado y elimina el departamento.
>>##### URL : http://localhost:4000/api/comentarios/ID  
>>##### URLRed : https://vibbeapi.herokuapp.com/api/comentarios/ID" 




## CREADORES :
>>#### David Prada Linarez .

>>#### Moises Rolando Machuca Valverte .