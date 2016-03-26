class RemoveUsernameFromMessages < ActiveRecord::Migration[5.0]
  def change
    remove_column :messages, :username, :string
  end
end
