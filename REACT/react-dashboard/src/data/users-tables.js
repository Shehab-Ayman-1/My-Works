export const usersColumns = [
	{ field: "id", headerName: "ID", minWidth: 50 },
	{
		field: "user",
		headerName: "Username",
		minWidth: 230,
		renderCell: (rowData) => {
			return (
				<>
					<img src={rowData.row.img} alt="row-data-img" />
					{rowData.row.username}
				</>
			);
		},
	},
	{ field: "age", headerName: "Age", minWidth: 100 },
	{ field: "email", headerName: "Email", minWidth: 250 },
	{
		field: "status",
		headerName: "Status",
		minWidth: 180,
		renderCell: (params) => {
			return <span className={`status-type ${params.row.status}`}>{params.row.status}</span>;
		},
	},
];

export const usersRows = [
	{
		id: 1,
		username: "Snow",
		age: 35,
		email: "snow@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/men/75.jpg",
	},
	{
		id: 2,
		username: "Lannister",
		age: 42,
		email: "Lannister@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/men/81.jpg",
	},
	{
		id: 3,
		username: "Carla",
		age: 45,
		email: "Carla@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/women/57.jpg",
	},
	{
		id: 4,
		username: "Stark",
		age: 16,
		email: "Stark@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/women/56.jpg",
	},
	{
		id: 5,
		username: "Targaryen",
		age: 22,
		email: "Targaryen@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		id: 6,
		username: "Melisandre",
		age: 150,
		email: "Melisandre@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/men/6.jpg",
	},
	{
		id: 7,
		username: "Clifford",
		age: 44,
		email: "Clifford@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/men/7.jpg",
	},
	{
		id: 8,
		username: "Frances",
		age: 36,
		email: "Frances@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/women/52.jpg",
	},
	{
		id: 9,
		username: "Roxie",
		age: 65,
		email: "Roxie@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/women/51.jpg",
	},
	{
		id: 11,
		username: "Snow",
		age: 35,
		email: "snow@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/men/1.jpg",
	},
	{
		id: 12,
		username: "Lannister",
		age: 42,
		email: "Lannister@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/men/2.jpg",
	},
	{
		id: 13,
		username: "Carla",
		age: 45,
		email: "Carla@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/women/57.jpg",
	},
	{
		id: 14,
		username: "Stark",
		age: 16,
		email: "Stark@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/women/56.jpg",
	},
	{
		id: 15,
		username: "Targaryen",
		age: 22,
		email: "Targaryen@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		id: 16,
		username: "Melisandre",
		age: 150,
		email: "Melisandre@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/men/6.jpg",
	},
	{
		id: 17,
		username: "Clifford",
		age: 44,
		email: "Clifford@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/men/7.jpg",
	},
	{
		id: 18,
		username: "Frances",
		age: 36,
		email: "Frances@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/women/52.jpg",
	},
	{
		id: 19,
		username: "Roxie",
		age: 65,
		email: "Roxie@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/women/51.jpg",
	},
	{
		id: 21,
		username: "Snow",
		age: 35,
		email: "snow@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/men/1.jpg",
	},
	{
		id: 22,
		username: "Lannister",
		age: 42,
		email: "Lannister@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/men/2.jpg",
	},
	{
		id: 23,
		username: "Carla",
		age: 45,
		email: "Carla@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/women/57.jpg",
	},
	{
		id: 24,
		username: "Stark",
		age: 16,
		email: "Stark@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/women/56.jpg",
	},
	{
		id: 25,
		username: "Targaryen",
		age: 22,
		email: "Targaryen@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		id: 26,
		username: "Melisandre",
		age: 150,
		email: "Melisandre@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/men/6.jpg",
	},
	{
		id: 27,
		username: "Clifford",
		age: 44,
		email: "Clifford@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/men/7.jpg",
	},
	{
		id: 28,
		username: "Frances",
		age: 36,
		email: "Frances@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/women/52.jpg",
	},
	{
		id: 29,
		username: "Roxie",
		age: 65,
		email: "Roxie@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/women/51.jpg",
	},
	{
		id: 31,
		username: "Snow",
		age: 35,
		email: "snow@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/men/1.jpg",
	},
	{
		id: 32,
		username: "Lannister",
		age: 42,
		email: "Lannister@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/men/2.jpg",
	},
	{
		id: 33,
		username: "Carla",
		age: 45,
		email: "Carla@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/women/57.jpg",
	},
	{
		id: 34,
		username: "Stark",
		age: 16,
		email: "Stark@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/women/56.jpg",
	},
	{
		id: 35,
		username: "Targaryen",
		age: 22,
		email: "Targaryen@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		id: 36,
		username: "Melisandre",
		age: 150,
		email: "Melisandre@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/men/6.jpg",
	},
	{
		id: 37,
		username: "Clifford",
		age: 44,
		email: "Clifford@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/men/7.jpg",
	},
	{
		id: 38,
		username: "Frances",
		age: 36,
		email: "Frances@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/women/52.jpg",
	},
	{
		id: 39,
		username: "Roxie",
		age: 65,
		email: "Roxie@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/women/51.jpg",
	},
	{
		id: 41,
		username: "Snow",
		age: 35,
		email: "snow@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/men/1.jpg",
	},
	{
		id: 42,
		username: "Lannister",
		age: 42,
		email: "Lannister@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/men/2.jpg",
	},
	{
		id: 43,
		username: "Carla",
		age: 45,
		email: "Carla@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/women/57.jpg",
	},
	{
		id: 44,
		username: "Stark",
		age: 16,
		email: "Stark@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/women/56.jpg",
	},
	{
		id: 45,
		username: "Targaryen",
		age: 22,
		email: "Targaryen@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		id: 46,
		username: "Melisandre",
		age: 150,
		email: "Melisandre@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/men/6.jpg",
	},
	{
		id: 47,
		username: "Clifford",
		age: 44,
		email: "Clifford@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/men/7.jpg",
	},
	{
		id: 48,
		username: "Frances",
		age: 36,
		email: "Frances@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/women/52.jpg",
	},
	{
		id: 49,
		username: "Roxie",
		age: 65,
		email: "Roxie@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/women/51.jpg",
	},
	{
		id: 51,
		username: "Snow",
		age: 35,
		email: "snow@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/men/1.jpg",
	},
	{
		id: 52,
		username: "Lannister",
		age: 42,
		email: "Lannister@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/men/2.jpg",
	},
	{
		id: 53,
		username: "Carla",
		age: 45,
		email: "Carla@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/women/57.jpg",
	},
	{
		id: 54,
		username: "Stark",
		age: 16,
		email: "Stark@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/women/56.jpg",
	},
	{
		id: 55,
		username: "Targaryen",
		age: 22,
		email: "Targaryen@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		id: 56,
		username: "Melisandre",
		age: 150,
		email: "Melisandre@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/men/6.jpg",
	},
	{
		id: 57,
		username: "Clifford",
		age: 44,
		email: "Clifford@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/men/7.jpg",
	},
	{
		id: 58,
		username: "Frances",
		age: 36,
		email: "Frances@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/women/52.jpg",
	},
	{
		id: 59,
		username: "Roxie",
		age: 65,
		email: "Roxie@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/women/51.jpg",
	},
	{
		id: 61,
		username: "Snow",
		age: 35,
		email: "snow@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/men/1.jpg",
	},
	{
		id: 62,
		username: "Lannister",
		age: 42,
		email: "Lannister@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/men/2.jpg",
	},
	{
		id: 63,
		username: "Carla",
		age: 45,
		email: "Carla@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/women/57.jpg",
	},
	{
		id: 64,
		username: "Stark",
		age: 16,
		email: "Stark@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/women/56.jpg",
	},
	{
		id: 65,
		username: "Targaryen",
		age: 22,
		email: "Targaryen@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		id: 66,
		username: "Melisandre",
		age: 150,
		email: "Melisandre@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/men/6.jpg",
	},
	{
		id: 67,
		username: "Clifford",
		age: 44,
		email: "Clifford@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/men/7.jpg",
	},
	{
		id: 68,
		username: "Frances",
		age: 36,
		email: "Frances@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/women/52.jpg",
	},
	{
		id: 69,
		username: "Roxie",
		age: 65,
		email: "Roxie@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/women/51.jpg",
	},
	{
		id: 71,
		username: "Snow",
		age: 35,
		email: "snow@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/men/1.jpg",
	},
	{
		id: 72,
		username: "Lannister",
		age: 42,
		email: "Lannister@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/men/2.jpg",
	},
	{
		id: 73,
		username: "Carla",
		age: 45,
		email: "Carla@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/women/57.jpg",
	},
	{
		id: 74,
		username: "Stark",
		age: 16,
		email: "Stark@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/women/56.jpg",
	},
	{
		id: 75,
		username: "Targaryen",
		age: 22,
		email: "Targaryen@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		id: 76,
		username: "Melisandre",
		age: 150,
		email: "Melisandre@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/men/6.jpg",
	},
	{
		id: 77,
		username: "Clifford",
		age: 44,
		email: "Clifford@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/men/7.jpg",
	},
	{
		id: 78,
		username: "Frances",
		age: 36,
		email: "Frances@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/women/52.jpg",
	},
	{
		id: 79,
		username: "Roxie",
		age: 65,
		email: "Roxie@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/women/51.jpg",
	},
	{
		id: 81,
		username: "Snow",
		age: 35,
		email: "snow@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/men/1.jpg",
	},
	{
		id: 82,
		username: "Lannister",
		age: 42,
		email: "Lannister@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/men/2.jpg",
	},
	{
		id: 83,
		username: "Carla",
		age: 45,
		email: "Carla@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/women/57.jpg",
	},
	{
		id: 84,
		username: "Stark",
		age: 16,
		email: "Stark@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/women/56.jpg",
	},
	{
		id: 85,
		username: "Targaryen",
		age: 22,
		email: "Targaryen@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		id: 86,
		username: "Melisandre",
		age: 150,
		email: "Melisandre@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/men/6.jpg",
	},
	{
		id: 87,
		username: "Clifford",
		age: 44,
		email: "Clifford@example.com",
		status: "Pending",
		img: "https://randomuser.me/api/portraits/men/7.jpg",
	},
	{
		id: 88,
		username: "Frances",
		age: 36,
		email: "Frances@example.com",
		status: "Approved",
		img: "https://randomuser.me/api/portraits/women/52.jpg",
	},
	{
		id: 89,
		username: "Roxie",
		age: 65,
		email: "Roxie@example.com",
		status: "Active",
		img: "https://randomuser.me/api/portraits/women/51.jpg",
	},
];
