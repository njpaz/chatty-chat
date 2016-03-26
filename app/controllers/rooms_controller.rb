class RoomsController < ApplicationController
  def show
    @room = Room.find(params[:id])
  end

  def new
    @room = Room.new
  end

  def create
    room_params = params[:room].permit(:name)
    @room = Room.new room_params
    if @room.save
      redirect_to @room
    else
      render :new
    end
  end
end
