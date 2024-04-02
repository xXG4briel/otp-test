# Sem lib
docker build -f ./sem-lib/Dockerfile -t gruposkill/otp_sem_lib ./sem-lib
docker run --rm -p 5000:5000 gruposkill/otp_sem_lib
docker push gruposkill/otp_sem_lib

# Com lib
docker build -f ./com-lib/Dockerfile -t gruposkill/otp_com_lib ./com-lib
docker run --rm -p 5000:5000 gruposkill/otp_com_lib
docker push gruposkill/otp_com_lib

# Req
wget -qO- http://localhost:5000/