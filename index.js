const express = require('express');
const app = express();

// Cổng 8080 là bắt buộc đối với AWS Elastic Beanstalk
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('<h1>🚀 KẾT NỐI NỘI BỘ MULTI-AZ THÀNH CÔNG RỰC RỠ!</h1><p>Hạ tầng Beanstalk và đường ống CI/CD đã thông suốt 100%.</p>');
});

app.listen(PORT, () => {
    console.log(`Ứng dụng test đang chạy trên cổng ${PORT}`);
});