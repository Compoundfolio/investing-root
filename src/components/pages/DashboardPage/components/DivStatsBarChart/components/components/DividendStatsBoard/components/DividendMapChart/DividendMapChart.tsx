"use client"

import React, { memo } from 'react'
import { ResponsiveTreeMap } from '@nivo/treemap'
import { DataVisHeading, colors } from '@core'

const data = {
	"name": "nivo",
	"color": colors.gold,
	"children": [
		{
			"name": "viz",
			"color": "hsl(142, 70%, 50%)",
			"children": [
				{
					"name": "stack",
					"color": "hsl(184, 70%, 50%)",
					"children": [
						{
							"name": "cchart",
							"color": "hsl(146, 70%, 50%)",
							"loc": 134803
						},
						{
							"name": "xAxis",
							"color": "hsl(179, 70%, 50%)",
							"loc": 173136
						},
						{
							"name": "yAxis",
							"color": "hsl(167, 70%, 50%)",
							"loc": 3922
						},
						{
							"name": "layers",
							"color": "hsl(228, 70%, 50%)",
							"loc": 25191
						}
					]
				},
				{
					"name": "ppie",
					"color": "hsl(106, 70%, 50%)",
					"children": [
						{
							"name": "chart",
							"color": "hsl(122, 70%, 50%)",
							"children": [
								{
									"name": "pie",
									"color": "hsl(251, 70%, 50%)",
									"children": [
										{
											"name": "outline",
											"color": "hsl(126, 70%, 50%)",
											"loc": 157114
										},
										{
											"name": "slices",
											"color": "hsl(118, 70%, 50%)",
											"loc": 25016
										},
										{
											"name": "bbox",
											"color": "hsl(281, 70%, 50%)",
											"loc": 85147
										}
									]
								},
								{
									"name": "donut",
									"color": "hsl(244, 70%, 50%)",
									"loc": 39256
								},
								{
									"name": "gauge",
									"color": "hsl(197, 70%, 50%)",
									"loc": 59989
								}
							]
						},
						{
							"name": "legends",
							"color": "hsl(190, 70%, 50%)",
							"loc": 3644
						}
					]
				}
			]
		},
		{
			"name": "colors",
			"color": "hsl(68, 70%, 50%)",
			"children": [
				{
					"name": "rgb",
					"color": "hsl(270, 70%, 50%)",
					"loc": 175050
				},
				{
					"name": "hsl",
					"color": "hsl(176, 70%, 50%)",
					"loc": 14934
				}
			]
		},
		// {
		// 	"name": "utils",
		// 	"color": "hsl(5, 70%, 50%)",
		// 	"children": [
		// 		{
		// 			"name": "randomize",
		// 			"color": "hsl(133, 70%, 50%)",
		// 			"loc": 122689
		// 		},
		// 		{
		// 			"name": "resetClock",
		// 			"color": "hsl(176, 70%, 50%)",
		// 			"loc": 8167
		// 		},
		// 		{
		// 			"name": "noop",
		// 			"color": "hsl(168, 70%, 50%)",
		// 			"loc": 137942
		// 		},
		// 		{
		// 			"name": "tick",
		// 			"color": "hsl(198, 70%, 50%)",
		// 			"loc": 94486
		// 		},
		// 		{
		// 			"name": "forceGC",
		// 			"color": "hsl(10, 70%, 50%)",
		// 			"loc": 27357
		// 		},
		// 		{
		// 			"name": "stackTrace",
		// 			"color": "hsl(220, 70%, 50%)",
		// 			"loc": 17973
		// 		},
		// 		{
		// 			"name": "dbg",
		// 			"color": "hsl(248, 70%, 50%)",
		// 			"loc": 145679
		// 		}
		// 	]
		// },
		// {
		// 	"name": "generators",
		// 	"color": "hsl(110, 70%, 50%)",
		// 	"children": [
		// 		{
		// 			"name": "address",
		// 			"color": "hsl(120, 70%, 50%)",
		// 			"loc": 41605
		// 		},
		// 		{
		// 			"name": "city",
		// 			"color": "hsl(85, 70%, 50%)",
		// 			"loc": 46254
		// 		},
		// 		{
		// 			"name": "animal",
		// 			"color": "hsl(330, 70%, 50%)",
		// 			"loc": 70756
		// 		},
		// 		{
		// 			"name": "movie",
		// 			"color": "hsl(96, 70%, 50%)",
		// 			"loc": 175850
		// 		},
		// 		{
		// 			"name": "user",
		// 			"color": "hsl(46, 70%, 50%)",
		// 			"loc": 120610
		// 		}
		// 	]
		// },
		// {
		// 	"name": "set",
		// 	"color": "hsl(281, 70%, 50%)",
		// 	"children": [
		// 		{
		// 			"name": "clone",
		// 			"color": "hsl(350, 70%, 50%)",
		// 			"loc": 135038
		// 		},
		// 		{
		// 			"name": "intersect",
		// 			"color": "hsl(254, 70%, 50%)",
		// 			"loc": 95839
		// 		},
		// 		{
		// 			"name": "merge",
		// 			"color": "hsl(185, 70%, 50%)",
		// 			"loc": 111858
		// 		},
		// 		{
		// 			"name": "reverse",
		// 			"color": "hsl(81, 70%, 50%)",
		// 			"loc": 51570
		// 		},
		// 		{
		// 			"name": "toArray",
		// 			"color": "hsl(200, 70%, 50%)",
		// 			"loc": 39168
		// 		},
		// 		{
		// 			"name": "toObject",
		// 			"color": "hsl(92, 70%, 50%)",
		// 			"loc": 119241
		// 		},
		// 		{
		// 			"name": "fromCSV",
		// 			"color": "hsl(223, 70%, 50%)",
		// 			"loc": 199289
		// 		},
		// 		{
		// 			"name": "slice",
		// 			"color": "hsl(7, 70%, 50%)",
		// 			"loc": 32086
		// 		},
		// 		{
		// 			"name": "append",
		// 			"color": "hsl(98, 70%, 50%)",
		// 			"loc": 154931
		// 		},
		// 		{
		// 			"name": "prepend",
		// 			"color": "hsl(71, 70%, 50%)",
		// 			"loc": 146036
		// 		},
		// 		{
		// 			"name": "shuffle",
		// 			"color": "hsl(14, 70%, 50%)",
		// 			"loc": 102868
		// 		},
		// 		{
		// 			"name": "pick",
		// 			"color": "hsl(297, 70%, 50%)",
		// 			"loc": 155618
		// 		},
		// 		{
		// 			"name": "plouc",
		// 			"color": "hsl(74, 70%, 50%)",
		// 			"loc": 109542
		// 		}
		// 	]
		// },
		// {
		// 	"name": "text",
		// 	"color": "hsl(126, 70%, 50%)",
		// 	"children": [
		// 		{
		// 			"name": "trim",
		// 			"color": "hsl(332, 70%, 50%)",
		// 			"loc": 57576
		// 		},
		// 		{
		// 			"name": "slugify",
		// 			"color": "hsl(356, 70%, 50%)",
		// 			"loc": 22648
		// 		},
		// 		{
		// 			"name": "snakeCase",
		// 			"color": "hsl(154, 70%, 50%)",
		// 			"loc": 131440
		// 		},
		// 		{
		// 			"name": "camelCase",
		// 			"color": "hsl(56, 70%, 50%)",
		// 			"loc": 26314
		// 		},
		// 		{
		// 			"name": "repeat",
		// 			"color": "hsl(65, 70%, 50%)",
		// 			"loc": 58024
		// 		},
		// 		{
		// 			"name": "padLeft",
		// 			"color": "hsl(96, 70%, 50%)",
		// 			"loc": 139109
		// 		},
		// 		{
		// 			"name": "padRight",
		// 			"color": "hsl(218, 70%, 50%)",
		// 			"loc": 987
		// 		},
		// 		{
		// 			"name": "sanitize",
		// 			"color": "hsl(34, 70%, 50%)",
		// 			"loc": 153557
		// 		},
		// 		{
		// 			"name": "ploucify",
		// 			"color": "hsl(77, 70%, 50%)",
		// 			"loc": 48744
		// 		}
		// 	]
		// },
		// {
		// 	"name": "misc",
		// 	"color": "hsl(101, 70%, 50%)",
		// 	"children": [
		// 		{
		// 			"name": "greetings",
		// 			"color": "hsl(16, 70%, 50%)",
		// 			"children": [
		// 				{
		// 					"name": "hey",
		// 					"color": "hsl(200, 70%, 50%)",
		// 					"loc": 117407
		// 				},
		// 				{
		// 					"name": "HOWDY",
		// 					"color": "hsl(150, 70%, 50%)",
		// 					"loc": 17932
		// 				},
		// 				{
		// 					"name": "aloha",
		// 					"color": "hsl(274, 70%, 50%)",
		// 					"loc": 82505
		// 				},
		// 				{
		// 					"name": "AHOY",
		// 					"color": "hsl(176, 70%, 50%)",
		// 					"loc": 154329
		// 				}
		// 			]
		// 		},
		// 		{
		// 			"name": "other",
		// 			"color": "hsl(321, 70%, 50%)",
		// 			"loc": 108119
		// 		},
		// 		{
		// 			"name": "path",
		// 			"color": "hsl(164, 70%, 50%)",
		// 			"children": [
		// 				{
		// 					"name": "pathA",
		// 					"color": "hsl(269, 70%, 50%)",
		// 					"loc": 16936
		// 				},
		// 				{
		// 					"name": "pathB",
		// 					"color": "hsl(201, 70%, 50%)",
		// 					"children": [
		// 						{
		// 							"name": "pathB1",
		// 							"color": "hsl(196, 70%, 50%)",
		// 							"loc": 54209
		// 						},
		// 						{
		// 							"name": "pathB2",
		// 							"color": "hsl(27, 70%, 50%)",
		// 							"loc": 34570
		// 						},
		// 						{
		// 							"name": "pathB3",
		// 							"color": "hsl(343, 70%, 50%)",
		// 							"loc": 47197
		// 						},
		// 						{
		// 							"name": "pathB4",
		// 							"color": "hsl(245, 70%, 50%)",
		// 							"loc": 29073
		// 						}
		// 					]
		// 				},
		// 				{
		// 					"name": "pathC",
		// 					"color": "hsl(306, 70%, 50%)",
		// 					"children": [
		// 						{
		// 							"name": "pathC1",
		// 							"color": "hsl(277, 70%, 50%)",
		// 							"loc": 196058
		// 						},
		// 						{
		// 							"name": "pathC2",
		// 							"color": "hsl(179, 70%, 50%)",
		// 							"loc": 148834
		// 						},
		// 						{
		// 							"name": "pathC3",
		// 							"color": "hsl(289, 70%, 50%)",
		// 							"loc": 134458
		// 						},
		// 						{
		// 							"name": "pathC4",
		// 							"color": "hsl(63, 70%, 50%)",
		// 							"loc": 84079
		// 						},
		// 						{
		// 							"name": "pathC5",
		// 							"color": "hsl(67, 70%, 50%)",
		// 							"loc": 54712
		// 						},
		// 						{
		// 							"name": "pathC6",
		// 							"color": "hsl(85, 70%, 50%)",
		// 							"loc": 59445
		// 						},
		// 						{
		// 							"name": "pathC7",
		// 							"color": "hsl(39, 70%, 50%)",
		// 							"loc": 40726
		// 						},
		// 						{
		// 							"name": "pathC8",
		// 							"color": "hsl(215, 70%, 50%)",
		// 							"loc": 137057
		// 						},
		// 						{
		// 							"name": "pathC9",
		// 							"color": "hsl(137, 70%, 50%)",
		// 							"loc": 160646
		// 						}
		// 					]
		// 				}
		// 			]
		// 		}
		// 	]
		// }
	]
}

const DividendMapChart = () => {
	return (
		<DataVisHeading
			title='Dividend Map'
			dataVisDescription='TODO'
		>
			<div style={{ width: "100%", height: 355 + 20 }}>
				<ResponsiveTreeMap
					data={data}
					identity="name"
					value="loc"
					valueFormat=" >-.2s"
					labelSkipSize={12}
					labelTextColor={{
						from: 'color',
						modifiers: [
							[
								'darker',
								1.2
							]
						]
					}}
					orientLabel={false}
					parentLabelSize={28}
					parentLabelPadding={4}
					parentLabelTextColor={{
						from: 'color',
						modifiers: [
							[
								'darker',
								2
							]
						]
					}}
					nodeOpacity={0.3}
					borderColor={{
						from: 'color',
						modifiers: [
							[
								'darker',
								0.4
							]
						]
					}}
				/>
			</div>
		</DataVisHeading>
	)
}

export default memo(DividendMapChart)