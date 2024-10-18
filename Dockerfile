FROM ruby:3.3 as jekyll

EXPOSE 4000
WORKDIR /site

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    git \
    && rm -rf /var/lib/apt/lists/*

# used in the jekyll-server image, which is FROM this image
COPY docker-entrypoint.sh /usr/local/bin/

RUN gem update --system && gem install jekyll && gem cleanup

COPY Gemfile Gemfile.lock ./

RUN bundle install

CMD [ "bundle", "exec", "jekyll", "serve", "--force_polling", "-H", "0.0.0.0", "-P", "4000" ]

# CMD bundle update
