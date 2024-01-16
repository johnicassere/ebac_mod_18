# ebac_mod_18 Grunt
**Comandos**
####Primeiramente precisamos instalar o Grunt CLI de forma global:

`npm install –g grunt-cli`

`npm init -y`

####Após isso, na pasta do projeto digite:

`npm i --save-dev grunt`

O arquivo de configuração do Grunt é o Gruntfile.js. 
Neste arquivo, iremos configurar as tarefas e importar os plugins.
A configuração básica do Grunt é:
```
module.exports = function(grunt) {     
  grunt.initConfig({        
    pkg: grunt.file.readJSON(“package.json”); 
}); 
}
```  
No código, fizemos a exportação do arquivo, que será acessado pelo Grunt, onde ele injetará o argumento “grunt”. Inicializamos a configuração com grunt.initConfig, onde, dentro da função, em pkg, importamos o arquivo package.json.

Consulte os códigos escritos neste módulo no link 
<https://github.com/gcsfebactmp/sorteador_grunt>

**executar**
`npm run grunt`


#Sobre tarefas no Grunt

Para criar uma tarefa no Grunt devemos **registrá-la**. Uma tarefa no Grunt é basicamente uma **função**. Escrevemos uma tarefa no Grunt assim:

```
// após grunt.initConfig({ ... })
grunt.registerTask(“minhaTarefa”, function() {
// conteúdo da tarefas
console.log(“Olá Grunt”);
});
```

Para executar a tarefa, digitamos no terminal : **grunt minhaTarefa**.
No Windows, é necessário adicionar o comando na seção de scripts, no arquivo package.json:

```
“scripts”: {
  “grunt”: “grunt”
  }
```

Quando executamos apenas grunt, irá ocorrer um erro porque não possuímos uma tarefa default (padrão). Para resolver isso podemos registrar uma tarefa com o nome “default”.

Uma tarefa pode chamar outra, em **grunt.registerTask** onde inserimos o callback, também podemos inserir um array com os nomes das tarefas que iremos executar. Por exemplo:
```
grunt.registerTask(“default”, [“minhaTarefa”,
“minhaTarefa2”]);
```

#Plugins

As automações no Grunt funcionam com o uso de plugins.Possuímos plugins para compilar SASS e LESS, para pré-processador código de estilos, minificar arquivos, limpar pastas, entre outros. Os plugins também são tarefas, porém não utilizamos o **grunt.registerTask** para eles, mas sim a função **grunt.loadNpmTasks(“nomeDoPacote”)**, e dentro da função **initConfig**, após **“pkg”**, configuramos o plugin.

A configuração de um plugin pode ser dividida entre os ambientes. Por exemplo, podemos compilar um código LESS para produção aplicando a minificação e compilar o mesmo arquivo, mas não minificando para o ambiente de desenvolvimento. As configurações de plugins serão inseridas logo após a propriedade **“pkg”** dentro da função **grunt.initConfig**.

#Exemplo de configuração de plugin

```
module.exports = function(grunt) { 
  grunt.initConfig({
    pkg: grunt.file.readJSON(‘package.json’),
       less: {             
        development: {                
          files: {                   
            'final.css': 'origem.less'
   }        
  },
  production:{

  }    
 } 
}); 
grunt.loadNpmTasks(‘grunt-contrib-less’); 
}

```
Na configuração, onde temos a palavra **“desenvolvimento”** podemos separar as configurações no que o Grunt chama de targets (alvos), então podemos ter um alvo para desenvolvimento e outro para produção, enviando o arquivo final para outra pasta e comprimindo ele.
...

```
less: {     
  desenvolvimento: { ... }     
  producao: {           
    options: { compress: true }            files: { ‘dist/final.css’: ‘origem.less’ }      
    } 
  
  }

```

#Instalando plugin do Less
`npm install --save-dev grunt-contrib-less`

#Instalando plugin do Sass
`npm install --save-dev grunt-contrib-sass`

#Pacote grunt-concurrent

Instale o pacote **grunt-concurrent** como uma dependência do seu projeto usando o seguinte comando:
`npm install grunt-concurrent --save-dev`

No seu arquivo Gruntfile.js, carregue o plugin grunt-concurrent utilizando a função loadNpmTasks():
`grunt.loadNpmTasks('grunt-concurrent’);`
Configure as tarefas que você deseja executar em paralelo utilizando a tarefa concurrent no seu arquivo Gruntfile.js. Por fim, registre a tarefa concurrent como uma tarefa padrão ou como uma tarefa personalizada. 

#Pacote grunt-contrib-watch

Instale o pacote **grunt-contrib-watch** como uma dependência do seu projeto usando o seguinte comando:
`npm install grunt-contrib-watch --save-dev`

No seu arquivo Gruntfile.js, carregue o plugin **grunt-contrib-watch** utilizando a função 
**loadNpmTasks():**

`grunt.loadNpmTasks('grunt-contrib-watch’);`

Configure a tarefa watch no **grunt.initConfig()**, especificando os arquivos que você deseja monitorar e as tarefas a serem executadas quando ocorrerem alterações. Por fim, execute a tarefa do Grunt para iniciar o monitoramento.


#Pacote grunt-replace

Instale o pacote **grunt-replace** como uma dependência do seu projeto usando o seguinte comando:
`npm install grunt-replace --save-dev`

No seu arquivo Gruntfile.js, carregue o plugin grunt-replace utilizando a função loadNpmTasks():

`grunt.loadNpmTasks('grunt-replace');`

Configure a tarefa replace no **grunt.initConfig()**, especificando os arquivos e as substituições que você deseja realizar. Por fim, execute a tarefa do Grunt para iniciar o processo de substituição.


#Pacote grunt-contrib-htmlmin

Instale o pacote grunt-contrib-htmlmin como uma dependência do seu projeto usando o seguinte comando:
`npm install grunt-contrib-htmlmin --save-dev`

No seu arquivo Gruntfile.js, carregue o plugin grunt-contrib-htmlmin utilizando a função loadNpmTasks():

`grunt.loadNpmTasks('grunt-contrib-htmlmin');`

Configure a tarefa htmlmin no **grunt.initConfig()**, especificando os arquivos HTML que você deseja minificar e as opções de minificação. Por fim, execute a tarefa do Grunt para iniciar o processo de minificação.


#Pacote grunt-contrib-clean

Instale o pacote grunt-contrib-clean como uma dependência do seu projeto usando o seguinte comando:
`npm install grunt-contrib-clean --save-dev`

No seu arquivo Gruntfile.js, carregue o plugin grunt-contrib-clean utilizando a função loadNpmTasks():
`grunt.loadNpmTasks('grunt-contrib-clean');`

Configure a tarefa clean no **grunt.initConfig()**, especificando os arquivos e diretórios que você deseja limpar. Por fim, execute a tarefa do Grunt para iniciar o processo de limpeza.

#Pacote grunt-contrib-uglify

Instale o pacote com o comando:
`npm install grunt-contrib-uglify --save-dev`

Configure o Grunt para usar o "grunt-contrib-uglify" em seu arquivo Gruntfile.js. Abra o arquivo e adicione a seguinte configuração:

```
module.exports = function(grunt) {  
  grunt.initConfig({    
    uglify: {      
      options: {        
        // Opções do UglifyJS aqui     
        
         },

target: {        
  files: {          
    // Configuração dos arquivos de origem e destino aqui        
      }      
    }    
  }  
  })
}
```