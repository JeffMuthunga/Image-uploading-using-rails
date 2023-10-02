class PropertiesController < ApplicationController
  before_action :set_property, only: %i[ show update destroy ]

  # GET /properties
  def index
    @properties = Property.all

    render json: @properties
  end

  # GET /properties/1
  def show
    render json: @property.as_json(include: :pictures).merge(
      image_urls:  @property.pictures.map do |image|
        url_for(image)
      end
    )
  end

  # POST /properties
  def create
    @property = Property.new(property_params)

    if @property.save
      render json: @property, status: :created, location: @property
    else
      render json: @property.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /properties/1
  def update
    if @property.update(property_params)
      render json: @property
    else
      render json: @property.errors, status: :unprocessable_entity
    end
  end

  # DELETE /properties/1
  def destroy
    @property.destroy
  end


  def property_images
    @property = Property.last
    render json: PropertySerializer.new(@property).serializable_hash[:data][:attributes]
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_property
      @property = Property.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def property_params
      params.require(:property).permit(:name, :price, :description, :bedrooms, :bathroooms, pictures: [])
    end
end
