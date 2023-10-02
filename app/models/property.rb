class Property < ApplicationRecord

    has_many_attached :pictures, dependent: :destroy
    has_many_attached :videos, dependent: :destroy


    def image_urls
        Rails.application.routes.url_helpers.url_for(pictures) if pictures.attached?
    end
end
