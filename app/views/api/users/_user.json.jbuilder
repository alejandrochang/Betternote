json.set! :user do
    json.extract! @user, :id, :username, :email
end

# json.set! :user do
#   json.set! @user.id do
#     json.extract! @user, :id, :username, :email
#   end
# end
