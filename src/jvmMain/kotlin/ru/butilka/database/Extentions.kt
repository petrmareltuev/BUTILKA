package ru.butilka.database

import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.StdOutSqlLogger
import org.jetbrains.exposed.sql.Transaction
import org.jetbrains.exposed.sql.addLogger
import org.jetbrains.exposed.sql.transactions.transaction

fun <T> database(statement: Transaction.() -> T): T {
    Database.connect("jdbc:postgresql://localhost:5432/root", driver = "org.postgresql.Driver",
        user = "root", password = "mpibutilka")

    return transaction {
        addLogger(StdOutSqlLogger)
        statement()
    }
}