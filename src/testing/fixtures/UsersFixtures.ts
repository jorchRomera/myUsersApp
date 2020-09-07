export const aUser = {
    id: '98asi32hg8wehid7987as5dfgs8as7fh',
    firstname: 'Alice',
    lastName: 'Armstrong',
    phone: '1157717048',
    picture: 'http://www.pictureUrl.com/98asi32hg8wehid7987as5dfgs8as7fh',
    location: { street: 'Fake Street 123', city: 'Chicago' },
};

export const otherUser = {
    id: '07bq2j6d1ihyu764d8gt5gfg7509h20k',
    firstname: 'Bob',
    lastName: 'Brown',
    phone: '123456789',
    picture: 'http://www.pictureUrl.com/07bq2j6d1ihyu764d8gt5gfg7509h20k',
    location: { street: 'Other Street 456', city: 'Los Angeles' },
};

export const anotherUser = {
    id: '67ksm37g0f09asd3h5qas5hi09g784o8',
    firstname: 'Carla',
    lastName: 'Carpenter',
    phone: '789456234',
    picture: 'http://www.pictureUrl.com/67ksm37g0f09asd3h5qas5hi09g784o8',
    location: { street: 'Another Street 789', city: 'New York' },
};

export const aUserWithLastnameArmstrong = { ...aUser };
export const aUserWithLastnameBrown = { ...otherUser };
export const aUserWithLastnameCarpenter = { ...anotherUser };
