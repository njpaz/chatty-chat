class RemoveIdentifierFromRooms < ActiveRecord::Migration[5.0]
  def change
    remove_column :rooms, :identifier, :string
  end
end
