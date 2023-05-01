CREATE TABLE candidato ( 
	id_candidato         INTEGER NOT NULL  PRIMARY KEY  ,
	nome                 VARCHAR(30)     ,
	foto                 BLOB     ,
	cargo                VARCHAR(30)     ,
	endereço_rua         VARCHAR(100)     ,
	endereço_numero      VARCHAR(100)     ,
	endereço_bairro      VARCHAR(100)     ,
	endereço_cidade      VARCHAR(100)     ,
	endereço_estado      VARCHAR(100)     ,
	endereço_país        VARCHAR(100)     ,
	telefone             VARCHAR(30)     ,
	email                VARCHAR(30)     ,
	sobre                VARCHAR(400)     
 );

CREATE TABLE experiência ( 
	id_experiência       INTEGER NOT NULL  PRIMARY KEY  ,
	nome_lugar           VARCHAR(30)     ,
	cargo                VARCHAR(30)     ,
	data_inicio          DATE     ,
	data_recisão         DATE     ,
	descrição            VARCHAR(400)     ,
	FOREIGN KEY ( id_experiência ) REFERENCES candidato( id_candidato )  
 );

CREATE TABLE formação ( 
	id_formação          INTEGER NOT NULL  PRIMARY KEY  ,
	nome_instituição     VARCHAR(30)     ,
	data_inicio          DATE     ,
	data_conclusão       DATE     ,
	curso                VARCHAR(30)     ,
	descrição            VARCHAR(400)     ,
	FOREIGN KEY ( id_formação ) REFERENCES candidato( id_candidato )  
 );

CREATE TABLE habilidades ( 
	id_habilidade        INTEGER NOT NULL  PRIMARY KEY  ,
	nome_habilidade      VARCHAR(30)     ,
	nivel                VARCHAR(30)     ,
	FOREIGN KEY ( id_habilidade ) REFERENCES candidato( id_candidato )  
 );

CREATE TABLE realizações ( 
	id_realizações       INTEGER NOT NULL  PRIMARY KEY  ,
	nome_instituição     VARCHAR(30)     ,
	tipo_de_premio       VARCHAR(30)     ,
	data                 DATE     ,
	descrição            VARCHAR(400)     ,
	FOREIGN KEY ( id_realizações ) REFERENCES candidato( id_candidato )  
 );
