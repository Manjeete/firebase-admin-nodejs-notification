
const admin  = require('firebase-admin');


// Create service account and generate service.json file and then put the following from service.json file
const FIREBASE_ADMIN_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG\nAqniIE4J5jQ9KhPHY7rdPgqCDjcfWzzBt\nSFG0fkyDK8CxbaReUUTU72pCfNoJTk4QDb4zwmte0H4Pt7PSrKB\nSVD+/cSwhSmLKdA5QsZazXiQguIE2hPaN26TTRU2VZWZ/8XM2MFiwrIbzZS3A3G4\ncHgLC99t5eDVs6xIUn07eqru/g0SwRKYHnpj6iF6sahI5O0ZjHRKL1Bl7IWu5YrD\nT0o/TQXog/GDYCXLewf5Qonp1JZiCn6qYceSoPczsGsG9FQW9P8pP/u7Ye7ZkaeD\naB2y2B4nAgMBAAECggEASgfoFqTCkWoa0C/WTfwa6CaM3hHD6or1/NgtD9iwyh0Q\nN0XpXNpwJ1pCoOV0KLJ+TZ5XaLEAXkpUE7goETPlM2ka8QZuh8a10rs5A/RAFHX5\nGn8wW6cBGwu8lKbeWw/E6Wefdnaq74qL0RUCto8IuyHrfJwZI1Cz+NC7dHBbTW9+\naPRWeeAPkfF+2ChCHE+UcsirALAPb4vz0SQY/xfYWJFyd3t6ShmRe2P5Pc7ExmYF\nwyW/CRxIwlWbwGR+xbJuoZboUMqCI/+TXBPx3J20c8tORTu1Hdx2XKiIwjMI3ijz\nU/soamSRu4WFvmb6NvTq09bQLDCJjyHe9CvbpNwSGQKBgQDnvn45Y45wy5e/MZ/a\n58DgCaunVLlRUGIEnGUC4o1AWgIlohnHeWL0zX1IwK1B6Nuh8HKV4rv7Fm5zLFzH\n7eEzvTmMNp17j+MlGam2DR44Ol6/WaWXxByLQ6S2lDP7trHdvzsdy+M2XUQUzmcr\nTrdaDiDctPK8Rqptwhbac/b0ewKBgQDBTFicAtca8tfBlOBOtyv7grhQky45mWYJ\nd6wxCUebnI55e4tTj4QvpYyNSo8Svp8ObMBz2KsGnZhl/+FCaMnpWIya0KeoRpDN\nPYSLUWvxY29hq6BUh8ipxiTx4Rni+rtvMN+MQ1IRrglGWawch+CPoezGMhJV6T7A\no0s54HnbRQKBgQDQmbglEGh3P8woXhL2iQYkpI/O34SwnRqd6+lA340mD98+4Nsz\noyBgG1ha1JUgburEqht6r81mBpsFMTmS/Z1pZTsX61F2l95u1trc9JHvKxt+QsO8\nCNtowErTzjO8sIcKg8hC2fR8SxetYt2bLg/9EBqkkHyu3S0r/zlzCk+RYQKBgQCh\nrhs7u0BzAQaom78W+C1ovUkv1DvI398yMhAsH+fuZ//f6w95wEQ/mkg68k9DzX+7\nEAnVnDhJW05amrGu23lvnapV4AssPIHnufoAkgUorhQ+7NA5hC26m8rRKoh9i111\nvrptVu3xbdHCL0U/xAN4AGfMy5r8kxDzDmLgsTsbxQKBgQDBTdh1BatenQtHejEb\nh7r2YrSCk+xuhzzVrxsN8gf9EkldouBddIQuc0108xKl2hI3uiLKlGVsJ24ndKbh\nJZfoyrXmdIXoNG1JGGu6l4rDuxbPQsTje2/o3xBSsN83RX6/exNUWXHZqTg6NkTg\nlgX3Yb+OnEyKU9tXb/bg6UaHtg==\n-----END PRIVATE KEY-----\n"
const FIREBASE_ADMIN_CLIENT_EMAIL = "test.iam.gserviceaccount.com"
const FIREBASE_ADMIN_PROJECT_ID = "test-project-id"

admin.initializeApp({
    credential: admin.credential.cert({
      private_key: FIREBASE_ADMIN_PRIVATE_KEY,
      client_email: FIREBASE_ADMIN_CLIENT_EMAIL,
      project_id: FIREBASE_ADMIN_PROJECT_ID,
    })
});

exports.sendNotification = async(topic,title,message,image) => {
    const messaging = admin.messaging()
    var payload = {
        notification: {
            title,
            body: message,
            image:image
        },
        topic: topic
        };

    messaging.send(payload)
    .then((result) => {
        console.log(result)
    })
}

