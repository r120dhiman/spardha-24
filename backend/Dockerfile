# FROM python:3.8

# #Set the working directory
# WORKDIR /

# # set environment variables
# ENV PYTHONDONTWRITEBYTECODE 1
# ENV PYTHONUNBUFFERED 1
# ENV DEBUG 1

# #copy all the files
# COPY . .

# #Install the dependencies
# RUN apt-get -y update
# RUN apt-get update && apt-get install -y python3 python3-pip
# # RUN pip3 install cmake
# # RUN apt-get install ffmpeg libsm6 libxext6  -y
# RUN pip3 install -r requirements.txt

# #Expose the required port
# # EXPOSE 5000

# # run gunicorn
# CMD gunicorn Spardha.wsgi.application --bind 0.0.0.0:$PORT
# # CMD gunicorn Spardha.wsgi.application --bind 0.0.0.0:8000
# # CMD python Spardha/manage.py runserver $PORT
# # CMD python Spardha/manage.py runserver


FROM python:3.12.6

# Set working directory
WORKDIR /app

# Environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Copy only requirements first (for caching)
COPY requirements.txt /app/

# Install dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    && pip install --no-cache-dir -r requirements.txt \
    && rm -rf /var/lib/apt/lists/*

# Copy project files
COPY . /app/

# Collect static files before starting (optional but recommended)
RUN python Spardha/manage.py collectstatic --noinput

# Run with Gunicorn (correct project name from README)
CMD gunicorn Spardha.wsgi:application --bind 0.0.0.0:$PORT