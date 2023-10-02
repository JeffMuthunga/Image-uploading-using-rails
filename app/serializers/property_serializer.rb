class PropertySerializer
  include JSONAPI::Serializer
  attributes :name, :price, :description, :bedrooms, :bathroooms
end
