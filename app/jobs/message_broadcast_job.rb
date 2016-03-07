class MessageBroadcastJob < ApplicationJob
  queue_as :chat

  def perform(message)
    ActionCable.server.broadcast 'room_channel', message: message
  end
end
