class PostSerializer
  include JSONAPI::Serializer
  attributes :id, :title, :image, :image_url, :created_at, :updated_at
end
