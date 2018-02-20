#!/bin/bash
n=34;

for file in *.jpg ; 
do mv  "${file}" poster_"${n}".jpg; n=$((n+1));  done

