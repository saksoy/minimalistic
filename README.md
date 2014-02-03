#What's this?
It's a jekyll theme which is responsive and minimalistic.

#How to install
git clone this repo

```
git clone git@github.com:detailyang/minimalistic.git
```

#Settings
please set the variables as follow in config.yaml:

```
name:              //site's name
disqus_short_name: //disqus name, if you neednt comment, let it null 
avatar: header.jpg //it's your avatar, which should be on static/src/img/
description:       //site's description
paginate:          //pagination, 5 is better choice
twitter:           //twitter's url, https:://twitter.com/xxx
github:            //github's url
email:             //your email
about:             //your personal infomation
```

#How to develop
This is based on grunt workflow, framework of compass, neat, bourbon, please ensure you have install these if you want to develop
```
cd static
grunt develop //if you are developing, it will watch the change of files and automatically generate compress files
grunt depoly  //generate compress files rigth way
```

#license
MIT

