class CreateCheckIns < ActiveRecord::Migration[5.2]
  def change
    create_table :checkins do |t|
      t.integer :user_id
      t.integer :park_id
      t.boolean :active, default: true
      t.datetime :checkin_date
    end
  end
end
