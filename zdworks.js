let obj=JSON.parse($response.body)
obj= {
  "holidays": "{\"list\":{\"name\":\"2021\",\"holiday\":[{\"alarmday\":[],\"holiday_id\":\"0\",\"name\":\"元旦\",\"period\":{\"from\":\"2020-1-1\",\"to\":\"2020-1-1\"}},{\"alarmday\":[{\"date\":\"2020-1-18\",\"type\":\"0\",\"workday\":[\"2020-1-19\"]},{\"date\":\"2019-1-23\",\"type\":\"1\",\"workday\":[]},{\"date\":\"2019-1-30\",\"type\":\"2\",\"workday\":[]},{\"date\":\"2020-1-31\",\"type\":\"0\",\"workday\":[\"2020-2-1\"]}],\"holiday_id\":\"1\",\"name\":\"春节\",\"period\":{\"from\":\"2020-1-24\",\"to\":\"2020-1-30\"}},{\"alarmday\":[{\"date\":\"2020-4-3\",\"type\":\"1\",\"workday\":[]},{\"date\":\"2020-4-6\",\"type\":\"2\",\"workday\":[]}],\"holiday_id\":\"2\",\"name\":\"清明节\",\"period\":{\"from\":\"2020-4-4\",\"to\":\"2020-4-6\"}},{\"alarmday\":[{\"date\":\"2020-4-25\",\"type\":\"0\",\"workday\":[\"2020-4-26\"]},{\"date\":\"2020-4-30\",\"type\":\"1\",\"workday\":[]},{\"date\":\"2020-5-5\",\"type\":\"2\",\"workday\":[]},{\"date\":\"2020-5-8\",\"type\":\"0\",\"workday\":[\"2020-5-9\"]}],\"holiday_id\":\"3\",\"name\":\"劳动节\",\"period\":{\"from\":\"2020-5-1\",\"to\":\"2020-5-5\"}},{\"alarmday\":[{\"date\":\"2020-6-24\",\"type\":\"1\",\"workday\":[]},{\"date\":\"2020-6-27\",\"type\":\"0\",\"workday\":[\"2020-6-28\"]}],\"holiday_id\":\"4\",\"name\":\"端午节\",\"period\":{\"from\":\"2020-6-25\",\"to\":\"2020-6-27\"}},{\"alarmday\":[{\"date\":\"2020-9-26\",\"type\":\"0\",\"workday\":[\"2020-9-27\"]},{\"date\":\"2020-9-30\",\"type\":\"1\",\"workday\":[]},{\"date\":\"2020-10-8\",\"type\":\"2\",\"workday\":[]},{\"date\":\"2020-10-9\",\"type\":\"0\",\"workday\":[\"2020-10-10\"]}],\"holiday_id\":\"5\",\"name\":\"国庆节\",\"period\":{\"from\":\"2020-10-1\",\"to\":\"2020-10-8\"}}]}}",
  "description": "success",
  "result_code": 200,
  "last_modified": 1608637997055
  }

$done({body: JSON.stringify(obj)});