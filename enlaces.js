// ESTRUCTURA COMPLETA: una URL independiente por año, curso y grado.
// Reemplaza cada vista-previa.html?... por el enlace real de su carpeta de Drive.
// Ejemplo: 1: "https://drive.google.com/drive/folders/ID_DE_SU_CARPETA",
// Los grados que no corresponden al curso no se incluyen.
const courseTitles = {"aritmetica": "Aritmética", "algebra": "Álgebra", "geometria": "Geometría", "trigonometria": "Trigonometría", "raz-matematico": "Razonamiento Matemático", "fisica": "Física", "lenguaje": "Lenguaje", "raz-verbal": "Razonamiento Verbal", "teatro": "Teatro y Oratoria", "creatividad": "Creatividad e Ingenio", "danza": "Danza Folclórica y Deportes"};
const driveLinksByYear = {
  2026: {
    // Aritmética
    "aritmetica": {
      1: "https://drive.google.com/drive/folders/1Ab-TO-uobhCstbXnuktXMV8lqM1W2SyH?usp=drive_link", // 1° de secundaria
      2: "https://drive.google.com/drive/folders/1j6yztwhf8Ie36aCUz89k8RU6_JW4f8AK?usp=drive_link", // 2° de secundaria
    },
    // Álgebra
    "algebra": {
      1: "https://drive.google.com/drive/folders/1wf0JUyUw484Gy0mxhUuS9WTj6lLIwRN0?usp=drive_link", // 1° de secundaria
      2: "https://drive.google.com/drive/folders/1GtmPkvYsHUG2fqsF7VEUQOBLog25xo9e?usp=drive_link", // 2° de secundaria
      3: "https://drive.google.com/drive/folders/1ype_8GnLN5E7W9-t8IcgpWSupl_-4Tt5?usp=drive_link", // 3° de secundaria
      4: "https://drive.google.com/drive/folders/1SGhUBdYM7uWFwrBf1c-oQqdTb-Cw7V8c?usp=drive_link", // 4° de secundaria
      5: "https://drive.google.com/drive/folders/14OCYyBp7UD4SCUU4gQZadXPp42c_3qgf?usp=drive_link", // 5° de secundaria
    },
    // Geometría
    "geometria": {
      1: "https://drive.google.com/drive/folders/1QABJGXIMEE82RIcvagIFp3EYfQS32m0P?usp=drive_link", // 1° de secundaria
      2: "https://drive.google.com/drive/folders/1Q6pc9TwadzBGcdmYfaJW8jhgcXdkMtJF?usp=drive_link", // 2° de secundaria
      3: "https://drive.google.com/drive/folders/1STsuVxr0AjCbVM7xMtBuwxS25THmwT2k?usp=drive_link", // 3° de secundaria
      4: "https://drive.google.com/drive/folders/1ruQgsTbdvyOVUakQwJINPbJpYbtyPj9X?usp=drive_link", // 4° de secundaria
      5: "https://drive.google.com/drive/folders/1Eahlp3tsGW7RjV89NNfVtrZNV4oque_A?usp=drive_link", // 5° de secundaria
    },
    // Trigonometría
    "trigonometria": {
      3: "https://drive.google.com/drive/folders/11fMT8EKuqE935TgnxtHVZbGFLvIaTT_N?usp=drive_link", // 3° de secundaria
      4: "https://drive.google.com/drive/folders/17h-1q5ZtGPBHAEk86exkVocg1BEodOpr?usp=drive_link", // 4° de secundaria
      5: "https://drive.google.com/drive/folders/1SfEqM2M8_msXv-aRr2dQK92TE5sKbKoz?usp=drive_link", // 5° de secundaria
    },
    // Razonamiento Matemático
    "raz-matematico": {
      1: "https://drive.google.com/drive/folders/12aPujgYiWg9V3Fc3TU6267o3u81fmeMP?usp=drive_link", // 1° de secundaria
      2: "https://drive.google.com/drive/folders/1Y-V5HiW-_Xto8pKMmuBnGIPHpGNutEBf?usp=drive_link", // 2° de secundaria
      3: "https://drive.google.com/drive/folders/1AOanCtHl-PSusYlIdIzH5pKg6ajo49Dm?usp=drive_link", // 3° de secundaria
      4: "https://drive.google.com/drive/folders/1Kj1mw5zwOqcmdGphFdPP2NE-OSMerYUt?usp=drive_link", // 4° de secundaria
      5: "https://drive.google.com/drive/folders/1qXQO_Yc2NFSLMwKP8xLte-VqNBgVkFZU?usp=drive_link", // 5° de secundaria
    },
    // Física
    "fisica": {
      1: "https://drive.google.com/drive/folders/1jdx_A8Hg7S7fSvHVZmWSVsqD-Fl-PsEy?usp=drive_link", // 1° de secundaria
      2: "https://drive.google.com/drive/folders/11wwd2Yw6UtLtGQsbPGKkccfpDb1Hy3CA?usp=drive_link", // 2° de secundaria
    },
    // Lenguaje
    "lenguaje": {
      1: "https://drive.google.com/drive/folders/1KM6IXuqYi_q-xlTjkJwS2IjDQM5BjmG0?usp=drive_link", // 1° de secundaria
      2: "https://drive.google.com/drive/folders/17JdP7UF_2PMy58JBqza0CEqPwG56Eyb8?usp=drive_link", // 2° de secundaria
    },
    // Razonamiento Verbal
    "raz-verbal": {
      3: "https://drive.google.com/drive/folders/1ddvGvjmy97Urz5Z_-vcHKUIV_3tKLqXj?usp=drive_link", // 3° de secundaria
      4: "https://drive.google.com/drive/folders/1DI_BcLHBoZgtvW-kpJ63ADnxf8D8S7RU?usp=drive_link", // 4° de secundaria
      5: "https://drive.google.com/drive/folders/1DnCs_bobw9UMPlRtQQsn5TJQAC7hMQ9h?usp=drive_link", // 5° de secundaria
    },
    // Teatro y Oratoria
    "teatro": {
      1: "https://drive.google.com/drive/folders/1ae7MUiE9pE5yF1ObcTXvnpWv0PRS7fX9?usp=drive_link", // 1° de secundaria
      2: "https://drive.google.com/drive/folders/1ae7MUiE9pE5yF1ObcTXvnpWv0PRS7fX9?usp=drive_link", // 2° de secundaria
      3: "https://drive.google.com/drive/folders/1ae7MUiE9pE5yF1ObcTXvnpWv0PRS7fX9?usp=drive_link", // 3° de secundaria
      4: "https://drive.google.com/drive/folders/1ae7MUiE9pE5yF1ObcTXvnpWv0PRS7fX9?usp=drive_link", // 4° de secundaria
      5: "https://drive.google.com/drive/folders/1ae7MUiE9pE5yF1ObcTXvnpWv0PRS7fX9?usp=drive_link", // 5° de secundaria
    },
    // Creatividad e Ingenio
    "creatividad": {
      1: "https://drive.google.com/drive/folders/1I1W3kWqnJi9K9jzThe12rJizm-LOXIQ-?usp=drive_link", // 1° de secundaria
      2: "https://drive.google.com/drive/folders/1I1W3kWqnJi9K9jzThe12rJizm-LOXIQ-?usp=drive_link", // 2° de secundaria
      3: "https://drive.google.com/drive/folders/1I1W3kWqnJi9K9jzThe12rJizm-LOXIQ-?usp=drive_link", // 3° de secundaria
      4: "https://drive.google.com/drive/folders/1I1W3kWqnJi9K9jzThe12rJizm-LOXIQ-?usp=drive_link", // 4° de secundaria
      5: "https://drive.google.com/drive/folders/1I1W3kWqnJi9K9jzThe12rJizm-LOXIQ-?usp=drive_link", // 5° de secundaria
    },
  },
  2027: {
    // Aritmética
    "aritmetica": {
      1: "https://drive.google.com/drive/folders/1vOmmguMKyunevmSP2kJCmV4GITmX9mqJ?usp=drive_link", // 1° de secundaria
      2: "https://drive.google.com/drive/folders/1ulcoCrc5yznxzanCa86EijccHhAJNnFU?usp=drive_link", // 2° de secundaria
    },
    // Álgebra
    "algebra": {
      1: "https://drive.google.com/drive/folders/1QDhGUWQHTpSg0n2kVb0Nd5xq54afVuaC?usp=drive_link", // 1° de secundaria
      2: "https://drive.google.com/drive/folders/1eA1tMlCbUg4vKG997wS7A78k4U9R6GZw?usp=drive_link", // 2° de secundaria
      3: "https://drive.google.com/drive/folders/1HQ9lix1V50PzAVg1Celc_5Mlpb-qQfaR?usp=drive_link", // 3° de secundaria
      4: "https://drive.google.com/drive/folders/18daIGIgOXeHocC3ti0jcpOVm62z3Gwdz?usp=drive_link", // 4° de secundaria
      5: "https://drive.google.com/drive/folders/1p9-cUZCOFGRcLnIX1dWGeEXo6rWOmio1?usp=drive_link", // 5° de secundaria
    },
    // Geometría
    "geometria": {
      1: "https://drive.google.com/drive/folders/1AQXAoFr-ypVNjGfUj-EXZ7HKE9f6T6z2?usp=drive_link", // 1° de secundaria
      2: "https://drive.google.com/drive/folders/1PWPUWVt0uIDCFVmL2vGMozGZ_gs5ycDC?usp=drive_link", // 2° de secundaria
      3: "https://drive.google.com/drive/folders/17yyqjtcPWJajJWyjT4j-s8Cs0iaAPjW5?usp=drive_link", // 3° de secundaria
      4: "https://drive.google.com/drive/folders/1kB9MiA7FDFHMs8q2fHRlE_SsZldqymDI?usp=drive_link", // 4° de secundaria
      5: "https://drive.google.com/drive/folders/1YrGGKhccvYGoH0MqJHoh0Zc_Bmi8Kv1c?usp=drive_link", // 5° de secundaria
    },
    // Trigonometría
    "trigonometria": {
      3: "https://drive.google.com/drive/folders/1umqG2cALKfp2ykm7reKjqLn4SE0SCSx-?usp=drive_link", // 3° de secundaria
      4: "https://drive.google.com/drive/folders/1y1QLrFlq4eHGvUyBllXXor5YzS2ohRo5?usp=drive_link", // 4° de secundaria
      5: "https://drive.google.com/drive/folders/1FC9k_jcZFcV8DemEMVJDcJ4chJLGThXW?usp=drive_link", // 5° de secundaria
    },
    // Razonamiento Matemático
    "raz-matematico": {
      1: "https://drive.google.com/drive/folders/1h5kj2awzMfE95EgVMVQQA3Sdbw3D03Dq?usp=drive_link", // 1° de secundaria
      2: "https://drive.google.com/drive/folders/1SITdUfOS17HKuwIsvH65thCF6diJNgGE?usp=drive_link", // 2° de secundaria
      3: "https://drive.google.com/drive/folders/1hPmMmMUrY6gTQgamrrgrqKTy2zSlR2Ql?usp=drive_link", // 3° de secundaria
      4: "https://drive.google.com/drive/folders/1b4LcbeL1vjUQB7XJwFky_7ksxOcgr2wS?usp=drive_link", // 4° de secundaria
      5: "https://drive.google.com/drive/folders/1c2xw39Wr171YV2PBP8ejtae0hmFNw23q?usp=drive_link", // 5° de secundaria
    },
    // Física
    "fisica": {
      1: "https://drive.google.com/drive/folders/1lp_Z8-6kMqIHmzwXQXKYo4eYSzIplNfV?usp=drive_link", // 1° de secundaria
      2: "https://drive.google.com/drive/folders/1gzaLhqN7Aiq6yNpAnCmrQD0t2MdBMCIT?usp=drive_link", // 2° de secundaria
    },
    // Lenguaje
    "lenguaje": {
      1: "https://drive.google.com/drive/folders/1qkZhfgJhT9KCig45UThhu8xjztagzWKa?usp=drive_link", // 1° de secundaria
      2: "https://drive.google.com/drive/folders/15AGfG9xDaMOpTchnvVrnJtg-p5f-2Xi5?usp=drive_link", // 2° de secundaria
    },
    // Razonamiento Verbal
    "raz-verbal": {
      3: "https://drive.google.com/drive/folders/1_4w8Mz5CajaU3ELvUujg0kkutmgd_1Rs?usp=drive_link", // 3° de secundaria
      4: "https://drive.google.com/drive/folders/1C028clTpsQ9tW9dA7patWGFki6GYRRtV?usp=drive_link", // 4° de secundaria
      5: "https://drive.google.com/drive/folders/11sd7u0k-9D0rYlZL0tipqXa5O4i8TEIv?usp=drive_link", // 5° de secundaria
    },
    // Teatro y Oratoria
    "teatro": {
      1: "https://drive.google.com/drive/folders/1LDH6rjaofTQVOK_4euhwty355D0v2RVa?usp=drive_link", // 1° de secundaria
      2: "https://drive.google.com/drive/folders/1LDH6rjaofTQVOK_4euhwty355D0v2RVa?usp=drive_link", // 2° de secundaria
      3: "https://drive.google.com/drive/folders/1LDH6rjaofTQVOK_4euhwty355D0v2RVa?usp=drive_link", // 3° de secundaria
      4: "https://drive.google.com/drive/folders/1LDH6rjaofTQVOK_4euhwty355D0v2RVa?usp=drive_link", // 4° de secundaria
      5: "https://drive.google.com/drive/folders/1LDH6rjaofTQVOK_4euhwty355D0v2RVa?usp=drive_link", // 5° de secundaria
    },
    // Creatividad e Ingenio
    "creatividad": {
      1: "https://drive.google.com/drive/folders/1RKbfmiDpt6_8p5vqvuNiL8JbfoCKqfJr?usp=drive_link", // 1° de secundaria
      2: "https://drive.google.com/drive/folders/1RKbfmiDpt6_8p5vqvuNiL8JbfoCKqfJr?usp=drive_link", // 2° de secundaria
      3: "https://drive.google.com/drive/folders/1RKbfmiDpt6_8p5vqvuNiL8JbfoCKqfJr?usp=drive_link", // 3° de secundaria
      4: "https://drive.google.com/drive/folders/1RKbfmiDpt6_8p5vqvuNiL8JbfoCKqfJr?usp=drive_link", // 4° de secundaria
      5: "https://drive.google.com/drive/folders/1RKbfmiDpt6_8p5vqvuNiL8JbfoCKqfJr?usp=drive_link", // 5° de secundaria
    }
  },
};
