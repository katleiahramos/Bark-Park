# Bark-Park

React app to help you and your dogs check-out local dog parks and make new friends!

![](https://i.imgur.com/VspCMYM.png)

![](https://media.giphy.com/media/69sHeFFc6ybtxzQir6/giphy.gif)



[LIVE DEMO](https://bark-park-app.herokuapp.com/)


# Mac OSX Prerequisites
1. Make sure xcode is up to date.   
    ```
    xcode-select --install
    ```
2. Install Homebrew
    ```
     ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```
3. This project uses Ruby 2.3.3, which is best installed through rbenv. 
    ```
    brew install rbenv
    ```
    ```
    brew install ruby-build
    ```
    ```
    rbenv install 2.3.3
    rbenv global 2.3.3
    ```
    ⚠️ If you see an error when trying to install Ruby, something along the lines of: 
    > ERROR: Ruby install aborted due to missing extensions
    Try the following line to install Ruby 2.3.3

    ```
    RUBY_CONFIGURE_OPTS="--with-openssl-dir=/usr/local/opt/openssl" rbenv install 2.3.3
    ```

    At this point, you want to restart your terminal to ensure everything takes effect. 

4. Install RSpec for testing
    ```
    gem install rspec
    ```
    Restart terminal again.    

    ⚠️ Important note: You should NEVER need to sudo gem install ___ anything. If you get a permission issue, that means your system isn't using the rbenv/rvm version of rubygems.

5. Install Postgres Database
    ```
    brew install postgres
    ```
6. Create a physical postgresql database
    ```
    initdb /usr/local/var/postgres
    ```
    You can start and stop the database with the following commands. These are nice to create as an [alias within your .bash_profile](https://mijingo.com/blog/creating-bash-aliases) 
    ```
    pg_ctl -D /usr/local/var/postgres start
    pg_ctl -D /usr/local/var/postgres stop
    ```
  
# Getting the app started  
  1. Clone this repo 

  2. Run `bundle install`

  3. Run `rake db:create`

  4. Run `rake db:migrate`

  5. Run `rake db:seed`

  6. Install JavaScript Dependencies in `client/src`. You're welcome to use Yarn or NPM 

  7. Run `rake start`

  8. Open your browser to `localhost:5000`

## Contributing
For more information on how to contribute to this project, please visit: https://github.com/katleiahramos/Bark-Park/blob/master/contributing.md 
Bug reports and pull requests are welcome on GitHub at https://github.com/katleiahramos/Bark-Park

## License

The project is available as open source under the terms of the [MIT LICENSE](https://opensource.org/licenses/MIT)
