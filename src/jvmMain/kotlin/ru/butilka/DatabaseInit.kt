package ru.butilka

import java.sql.Statement

internal fun databaseInit(statement: Statement) {
    //TODO check if DB exists
    statement.executeUpdate("create table if not exists users(" +
            "            user_id serial not null,\n" +
            "            username char (50) not null unique,\n" +
            "            password char (50) not null,\n" +
            "            full_name char (50),\n" +
            "            organization char (50),\n" +
            "            certificate_id char (10),\n" +
            "            person_id char (10),\n" +
            "            issued char(20),\n" +
            "            duty char (20),\n" +
            "            phone char (15),\n" +
            "            email char (30),\n" +
            "            isMajor boolean,\n" +
            "            primary key (user_id))")

    statement.executeUpdate("create table if not exists requests(" +
            "            request_id serial not null,\n" +
            "            username char (50) not null,\n" +
            "            report_id integer,\n" +
            "            primary key (request_id))")

    statement.executeUpdate("create table if not exists reports(" +
            "            report_id serial not null,\n" +
            "            username char (50) not null,\n" +
            "            participant char(50),\n" +
            "            victim char(50),\n" +
            "            witness char(50),\n" +
            "            comment char (50),\n" +
            "            primary key (report_id))")
}

