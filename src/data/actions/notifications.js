import { get } from '../services/adapters/xhr';
import { GeradorData } from '../ultils/getData';

export const fetchNotifications = async dispatch => {
  dispatch({
    type: 'FETCH_NOTIFICATIONS',
  });
  try {
    const results = await get('https://dummyjson.com/posts');

    let array = results?.data.posts?.map((elem) => ({
      ...elem,
      date: GeradorData('all'),
      mes: GeradorData(),
      dateString: GeradorData('string'),
      isRead: false,
    }));

    dispatch({
      type: 'FFETCH_NOTIFICATIONS_SUCESS',
      payload: array,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteNofitication = async (id, dispatch) => {
  try {
    dispatch({
      type: 'DELETE_NOTIFICATIONS_SUCCESS',
      id: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchIsRead = async (dispatch, array) => {
  try {
    dispatch({
      type: 'MARK_ALL_AS_READ_SUCESS',
      array: array,
    });
  } catch (error) {
    console.log(error);
  }
};
