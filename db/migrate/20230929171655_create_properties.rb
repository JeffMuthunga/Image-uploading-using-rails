class CreateProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      t.string :name
      t.integer :price
      t.string :description
      t.integer :bedrooms
      t.integer :bathroooms

      t.timestamps
    end
  end
end
