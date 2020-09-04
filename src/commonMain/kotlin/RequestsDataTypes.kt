package ru.butilka

interface RequestsDataTypes

data class LoginData(
        var username:String,
        var password: String
)  : RequestsDataTypes


data class User(
        var username:String,
        var password:String,
        var full_name:String,
        var organization:String,
        var certificate_id:String,
        var personal_id:String,
        var issued:String,
        var duty:String,
        var phone:String,
        var email:String) {
    override fun toString(): String {
        return "{\"username\":\"${username}\"," +
                "\"password\":\"${password}\"," +
                "\"full_name\":\"${full_name}\"," +
                "\"organization\":\"${organization}\"," +
                "\"certificate_id\":\"${certificate_id}\"," +
                "\"personal_id\":\"${personal_id}\"," +
                "\"issued\":\"${issued}\"," +
                "\"duty\":\"${duty}\"," +
                "\"phone\":\"${phone}\"," +
                "\"email\":\"${email}\"}"

    }
}

data class CaseInfo(
        var username: String,
        var password: String,
        var participant:String,
        var victim:String,
        var witness:String,
        var comment:String
):RequestsDataTypes{
    override fun toString(): String {
        return  "{\"username\":\"${username}\"," +
                "\"password\":\"${password}\"," +
                "\"participant\":\"${participant}\"," +
                "\"victim\":\"${victim}\"," +
                "\"witness\":\"${witness}\"," +
                "\"comment\":\"${comment}\"}"
    }
}
